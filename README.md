My Phaser Template
===============================================================================

>   A project template for [Phaser][phsr] games, featuring 6to5 and
>   localForage.


What's included?
-------------------------------------------------------------------------------

*   [Gulp][gulp] task manager, to handle development and distribution tasks.

*   [BrowserSync][bsnc] development server, for cross-device testing.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators — check if EditorConfig support is available for your code
    editor.

*   [JSHint][jsht] for code quality check.

*   [Bower][bowr] for easy component management.

*   [localForage][lofr] for client-side data storage, including Phaser plugin.

*   [6to5][6to5] to translate from ES6 to ES5 syntax.
    See which [language features][feat] are currently supported.

*   [Handlebars][hbs.] templates, [LESS][less] style sheets, offline cache and
    much more!


This template includes a sample game, presenting some of the features you can
already use.


Development Instructions
-------------------------------------------------------------------------------

Download and extract the [packaged project][dwld] contents, or clone this
repository locally. Either way, the following npm scripts are available to you,
performing the tasks described below.

```sh
npm install   # Installs all required project dependencies.
npm start     # Launches the development server.
npm run dist  # Prepare the game release for distribution.
npm run clean # Wipes the project from temporary and distribution build files.
```

Happy coding!


License
-------------------------------------------------------------------------------

All source code distributed under the terms of the [MIT License][lcnc].

Parts of this project are based on [slush-phaser-project][sspp], by [Sean
Bohan (@pixelpicosean)][ppsn].

Some code borrowed from [gulp-starter][gsdt], by Daniel Tello.


<!-- ---------------------------------------------------------------------- -->

[bowr]: http://bower.io/
[phsr]: http://phaser.io/
[6to5]: https://6to5.org/
[gulp]: http://gulpjs.com/
[jsht]: http://jshint.com/
[less]: http://lesscss.org/
[edcf]: http://editorconfig.org/
[hbs.]: http://handlebarsjs.com/
[bsnc]: http://www.browsersync.io/
[feat]: https://6to5.org/features.html
[ppsn]: https://github.com/pixelpicosean/
[lofr]: http://mozilla.github.io/localForage/
[gsdt]: https://github.com/greypants/gulp-starter/
[sspp]: https://github.com/pixelpicosean/slush-phaser-project
[dwld]: https://github.com/rblopes/my-phaser-template/archive/master.zip
[lcnc]: https://github.com/rblopes/my-phaser-template/blob/master/LICENSE
