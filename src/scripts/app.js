import Boot    from './app/states/Boot';
import Preload from './app/states/Preload';
import Menu    from './app/states/Menu';
import Credits from './app/states/Credits';
import Levels  from './app/states/Levels';
import Game    from './app/states/Game';


export function start () {
  var game = new Phaser.Game(480, 720, Phaser.AUTO);

  game.state.add('Boot',    Boot);
  game.state.add('Preload', Preload);
  game.state.add('Menu',    Menu);
  game.state.add('Credits', Credits);
  game.state.add('Levels',  Levels);
  game.state.add('Game',    Game);

  game.state.start('Boot');

  return game;
}
