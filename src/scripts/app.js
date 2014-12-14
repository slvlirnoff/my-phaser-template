import Boot    from './app/states/Boot';
import Preload from './app/states/Preload';
import Menu    from './app/states/Menu';
import Game    from './app/states/Game';


export default {

  start () {
    var game = new Phaser.Game(480, 720, Phaser.AUTO, 'game');

    game.state.add('Boot',    Boot);
    game.state.add('Preload', Preload);
    game.state.add('Menu',    Menu);
    game.state.add('Game',    Game);

    game.state.start('Boot');

    return game;
  }

};
