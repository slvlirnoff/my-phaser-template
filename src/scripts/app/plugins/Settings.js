/*
 * Settings
 * ============================================================================
 *
 * A simple settings plugin.
 */


class Settings extends Phaser.Plugin {

  init (data) {
    this.load(data);
  }

  // --------------------------------------------------------------------------

  load (data) {
    this.data = data;

    this.toggleSound(this.soundMuted);
  }

  toggleSound (muteSound = null) {
    if (muteSound === null)
      this.soundMuted = !this.soundMuted;
    else
      this.soundMuted = muteSound;

    this.game.sound.mute = this.soundMuted;
  }

  isLevelLocked (level) {
    return this.data.unlockedLevels[level];
  }

  unlockNextLevel (currentLevel) {
    if (currentLevel < 4)
      this.data.unlockedLevels[currentLevel + 1] = true;
  }

  // --------------------------------------------------------------------------

  get soundMuted () {
    return this.data.soundMuted;
  }

  set soundMuted (value) {
    this.data.soundMuted = value;
  }

}


export default Settings;
