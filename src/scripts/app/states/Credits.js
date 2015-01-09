/**
 * Credits
 * ============================================================================
 *
 * Just a simple credits screen.
 */


// Not required, but I extracted out the credits text into its own file.
import text from '../data/credits';


export default {

  create () {
    this.stage.backgroundColor = '#333';

    this.add.tween(this.add.image(0, 96, 'credits'))
      .from({ y: -96 }, 2000, 'Elastic.easeOut')
      .start();

    this.add.tween(this.makeCreditsLabel(this.world.centerX, 240, text))
      .from({ alpha: 0 }, 1500)
      .start();

    this.add.existing(this.makeBackButton(48, 48));
  },

  // --------------------------------------------------------------------------

  makeButton (x, y, face, callback = null) {
    var button = this.make.button(
      x, y, 'buttons', callback, this, face, face);

    button.anchor.set(0.5);
    button.input.useHandCursor = true;

    return button;
  },

  makeBackButton (x, y) {
    return this.makeButton(x, y, 'button-back', this.showMenu);
  },

  makeCreditsLabel (x, y, creditsText) {
    var text = this.add.text(x, y, creditsText, {
      fill: 'white',
      align: 'center',
      font: '48px Arial, sans-serif'
    });

    text.anchor.set(0.5, 0);

    return text;
  },

  showMenu () {
    this.state.start('Menu');
  }

};
