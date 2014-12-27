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

  // --------------------------------------------------------------------------

  get lastLevel () {
    return this.data.lastLevel;
  }

  set lastLevel (value) {
    this.data.lastLevel = value;
  }

  get soundMuted () {
    return this.data.soundMuted;
  }

  set soundMuted (value) {
    this.data.soundMuted = value;
  }

}


export default Settings;
