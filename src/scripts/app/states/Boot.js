/*
 * Boot state
 * ===========================================================================
 *
 * This is the first state of the game, and it's responsible for setting up
 * many of the configurations you'll use throughout the whole game session.
 */


import Phaser from 'Phaser';


// Firstly, we import the modules this class depends on. The `assets` module
// contains data about the boot and in game assets we'll need soon.
// `defaultSettings` contains data related to the game initial configuration.
import assets          from '../data/assets';
import defaultSettings from '../data/defaultSettings';

// Also, we import the custom plugins used by this game.
import Storage  from '../plugins/Storage';
import Settings from '../plugins/Settings';


export default class Boot extends Phaser.State {

  // Remember that this is the very first method ran by Phaser in whatever
  // state object or class.
  init () {
    // Point the asset loader to where all your assets live.
    this.load.baseURL = './assets/';

    // As an example, here we instantiate some plugins, passing them the
    // options required, and sharing them back as properties of the game
    // object. This way, each plugin can be accessed globally, without
    // polluting the global environment scope.
    this.game.storage  = this.game.plugins.add(Storage, 'my-phaser-template');
    this.game.settings = this.game.plugins.add(Settings, defaultSettings);

    // We also initialize the physics engine we'll be using.
    this.physics.startSystem(Phaser.Physics.ARCADE);

    // And we call `gameSetup` to adjust things like the screen orientation
    // handling, the number of pointers the game input will respond to etc.
    this.gameSetup();
  }

  preload () {
    // At this step, we ask Phaser to load the necessary assets to display our
    // preloader later.
    this.load.pack('boot', null, assets);
  }

  create () {
    // Immediately after asking Phaser to load the boot assets, we call the
    // next game state.
    this.state.start('Preload');
  }

  // --------------------------------------------------------------------------

  // Use this method to adjust the game appearance, number of input pointers,
  // screen orientation handling etc.
  gameSetup () {
    this.input.maxPointers = 2;

    this.scale.pageAlignHorizontally   = true;
    this.scale.pageAlignVertically     = true;
    this.stage.disableVisibilityChange = true;

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // Fetch game settings from local storage.
    this.game.storage.getItem('settings', this.restoreSettings, this);
  }

  // This is the callback invoked by the Storage plugin when fetching the game
  // settings.
  restoreSettings (err, data) {
    if (data !== null)
      this.game.settings.load(data);
  }

}
