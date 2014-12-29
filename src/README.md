My Awesome (Sample) Game
===============================================================================

Hi there!

This is just a small game, to show you some of the [current features][feat] of
6to5 that may help you creating good looking, performant games. You could use
this as the foundation of your own game, or scrap the whole thing and start
coding whatever you like right away.

Now, I don't know what you'll create, neither the kind of game you want to
accomplish here. Remember, though, this project is here for you to take its
best parts from it and create your own, marvelous game. Feel free to change
anything you want.

Besides that, take some minutes to look at the source code and see the sample
game in action. I hope you find it useful.

If something is broken or not working properly, file an issue detailing the
problem you found.


Arcade Physics by default
-------------------------------------------------------------------------------

Even though this sample game doesn't include any physics-related logic, this
template was prepared to use the Arcade Physics custom library by default. This
is accomplished by inserting the following override hash under the `bower.json`
package manifest:

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
the physics systems provided by Phaser, simply change that line to include the
custom library provided by the Phaser package. Remember that by removing the
package override for Phaser is the same as using the standard Phaser library
file.


Planned Updates
-------------------------------------------------------------------------------

### Missing Features ##########################################################

*   Handle screen orientation changes.
*   Include simple sound effects.
*   Use localForage to save game progress and settings.

<!-- 
### Fixes and Improvements ####################################################
-->


<!--  --------------------------------------------------------------------- -->

[feat]: https://6to5.org/features.html
