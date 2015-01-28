/*
 * Levels
 * ============================================================================
 *
 * A simple level selection screen, with unlockable buttons.
 */


export default class Levels extends Phaser.State {

  create () {
    const levelButtonPositions = [
      { x: 144, y: 432, level: 0 },
      { x: 240, y: 432, level: 1 },
      { x: 336, y: 432, level: 2 },
      { x: 192, y: 528, level: 3 },
      { x: 288, y: 528, level: 4 }
    ];

    this.stage.backgroundColor = '#333';

    this.add.tween(this.add.image(118, 96, 'levels', 'label'))
      .from({ y: -150 }, 2000, 'Elastic.easeOut')
      .start();

    for (let { x, y, level } of levelButtonPositions)
      this.add.existing(this.makeLevelButton(x, y, level));

    this.add.existing(this.makeBackButton(48, 48));
  }

  // --------------------------------------------------------------------------

  makeButton (x, y, key, face, callback = null) {
    let button = this.make.button(
      x, y, key, callback, this, face, face);

    button.anchor.set(0.5);
    button.input.useHandCursor = true;

    return button;
  }

  makeBackButton (x, y) {
    return this.makeButton(x, y, 'buttons', 'button-back', this.showMenu);
  }

  makeLevelButton (x, y, level) {
    let button = this.makeButton(
      x, y, 'levels', this.getLevelButtonFace(level), this.goToLevel);

    button.levelNumber = level;

    return button;
  }

  getLevelUnlocked (level) {
    return this.game.settings.isLevelLocked(level);
  }

  getLevelButtonFace (level) {
    if (this.getLevelUnlocked(level))
      return `button-lvl-${level + 1}`;

    return 'button-lvl-no';
  }

  goToLevel ({ levelNumber }) {
    if (this.getLevelUnlocked(levelNumber))
      this.state.start('Game', true, false, levelNumber);
  }

  showMenu () {
    this.state.start('Menu');
  }

}
