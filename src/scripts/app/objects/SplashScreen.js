/*
 * SplashScreen
 * ============================================================================
 *
 * Shows a busy, decorated image, containing a widget displaying the resource
 * loading progress rate.
 */


import Phaser from 'Phaser';


class SplashScreen extends Phaser.Group {

  constructor (game) {
    super(game);

    this.classType = Phaser.Image;

    this.addBackground();
    this.addProgressBar();

    this.progressFiller = this.addProgressFiller();
  }

  // --------------------------------------------------------------------------

  addBackground () {
    return this.create(0, 0, 'splash-screen');
  }

  addProgressBar () {
    return this.create(64, 584, 'progress-bar', 0);
  }

  addProgressFiller () {
    return this.create(64, 584, 'progress-bar', 1);
  }

}


export default SplashScreen;
