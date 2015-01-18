import Phaser from 'Phaser';

import Boot    from './app/states/Boot';
import Preload from './app/states/Preload';
import Menu    from './app/states/Menu';
import Credits from './app/states/Credits';
import Levels  from './app/states/Levels';
import Game    from './app/states/Game';


export function start () {
  var game = new Phaser.Game(480, 720, Phaser.AUTO);

  // Adding game states to Phaser can be as simple as that.
  [
    [ 'Boot'   , Boot    ],
    [ 'Preload', Preload ],
    [ 'Menu'   , Menu    ],
    [ 'Credits', Credits ],
    [ 'Levels' , Levels  ],
    [ 'Game'   , Game    ]
  ].map(([ name, state ]) => game.state.add(name, state));

  game.state.start('Boot');

  return game;
}
