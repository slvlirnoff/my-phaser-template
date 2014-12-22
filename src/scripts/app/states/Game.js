/*
 * Game state
 * ============================================================================
 *
 * This is where the real action takes place!
 */


import RotatingLogo from '../objects/RotatingLogo';


class Game extends Phaser.State {

  init (level) {
    // You can pass as many arguments as needed to a state prior to its
    // initialization. This is good if you have to transport information
    // between states that will affect the overall game behaviour...

    // In this example, we are taking the level of the game we'll initialize.

    // Remember that Phaser's StateManager API requires you to pass two more
    // optional arguments.

    // `this.state.start(stateName, true, false, ...)`
    this.level = level;
  }

  create () {
    // Below follows a little ES6 snippet, to show you not just classes and
    // modules are supported. Object destructured assignment: here, we're
    // taking out two properties of `this.world`, and aliasing them to two new
    // variables, `x` and `y`.

    // Besides it being a feature you shouldn't be abusing too much, this one
    // can become quite handy sometimes, specially when destructuring objects
    // in function parameters.
    var { centerX: x, centerY: y } = this.world;

    // The rotating logo.
    this.rotatingLogo = this.add.existing(this.makeRotatingLogo(x, y));

    // Place the rotating logo wherever the user clicks/touches the game
    // canvas.
    this.input.onUp.add(this.placeLogo, this);
  }

  update () {
    // See, this is just a demonstration game, so we have nothing much to do
    // here. Now, it's your time to create an awesome game!
  }

  makeRotatingLogo (x, y, speed = 4000) {
    return new RotatingLogo(this.game, x, y, speed);
  }

  placeLogo ({ x, y }) {
    // This method uses object destructuring right in the parameters, so we can
    // take only the object properties we are interested in.
    this.rotatingLogo.reset(x, y);
  }

}


export default Game;
