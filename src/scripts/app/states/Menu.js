/*
 * Menu state
 * ============================================================================
 *
 * This is a sample game menu, with mute, credits and game commands.
 */


export default {

  create () {
    // Give a gray shade to the background, show the title logo and the "Start"
    // button.
    this.stage.backgroundColor = 0x333333;

    this.add.tween(this.add.image(0, 153, 'title'))
      .from({ y: -200 }, 2000, Phaser.Easing.Elastic.Out)
      .start();

    this.add.existing(this.makeStartButton(240, 544));
    this.add.existing(this.makeCreditsButton(352, 544));
  },

  // --------------------------------------------------------------------------

  makeButton (x, y, face, callback = null) {
    var button = this.make.button(
      x, y, 'buttons', callback, this, face, face);

    button.anchor.set(0.5);
    button.input.useHandCursor = true;

    return button;
  },

  makeStartButton (x, y) {
    return this.makeButton(x, y, 'button-start', this.showLevelSelection);
  },

  makeCreditsButton (x, y) {
    return this.makeButton(x, y, 'button-menu', this.showCredits);
  },

  showLevelSelection () {
    this.state.start('Levels');
  },

  showCredits () {
    this.state.start('Credits');
  }

};
