/**
 * Preloader
 * ============================================================================
 *
 * Displays a busy, decorated image, with a widget showing at which rate the
 * game main game resources have loaded.
 */


class Preloader extends Phaser.Group {

  constructor (game) {
    super(game);

    this.addPreloaderBackground();
    this.addPreloaderBar();

    this.preloaderFiller = this.addPreloaderFiller();
  }

  // --------------------------------------------------------------------------

  addPreloaderBackground () {
    return this.add(this.game.make.image(0, 0, 'preloader-background'));
  }

  addPreloaderBar () {
    return this.add(this.game.make.sprite(64, 584, 'preloader-bar', 0));
  }

  addPreloaderFiller () {
    return this.add(this.game.make.sprite(64, 584, 'preloader-bar', 1));
  }

}


export default Preloader;
