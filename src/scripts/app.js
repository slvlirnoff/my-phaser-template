import Phaser from 'Phaser';

// Import all declared states from this module into an object.
import * as states from './app/states';


export function start () {
  var game = new Phaser.Game(480, 720, Phaser.AUTO);

  // Dynamically adding all required game states.
  Object.keys(states)
    .map((key) => [ key, states[key] ])
    .forEach((args) => game.state.add(... args));

  game.state.start('Boot');

  return game;
}
