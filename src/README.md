My Awesome (Sample) Game
===============================================================================

Hi there!

This small game is here to introduce you some of the Babel [features][feat]
that may help you creating good looking, performant games. You could use this
as the foundation of your own game, or just discard the whole thing and start
coding whatever you like right away.

Now, I don't know what you'll create, neither the kind of game you want to
accomplish here. Remember, though, this project is here for you to take its
best parts from it and create your own, marvelous game. So feel free to change
anything you want.

Besides that, please take some minutes to look at the source code and see the
sample game in action. I hope you'll find it useful.

If something is broken or not working properly, please file an issue detailing
the problem you found.


Arcade Physics by default
-------------------------------------------------------------------------------

Even though this sample game doesn't include any physics-related logic, this
template was prepared to use the Arcade Physics-only custom build. This is
accomplished by inserting the following override hash under the `bower.json`
package manifest file:

```js
{
  // ...
  "overrides": {
    "phaser": {
      "main": "build/custom/phaser-arcade-physics.js"
    }
  },
  // ...
}
```

If you're planning to use another physics system, or don't want to use any of
the physics systems provided with Phaser, simply replace the custom build path
with another one included with the Phaser package. Remember that by removing
the package override for Phaser is the same as using the standard Phaser build
file, which indeed includes the Arcade Physics and the P2 Physics systems by
default.


<!--  --------------------------------------------------------------------- -->

[feat]: http://babeljs.io/docs/learn-es6/
