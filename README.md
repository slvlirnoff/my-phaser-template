My Phaser Template
===============================================================================

NOTICE: This project is considered in an early development stage and is not
suitable for general use yet.

A project template for [Phaser][phsr] games, featuring Traceur Compiler and
localForage.


What's included?
-------------------------------------------------------------------------------

*   [Gulp][gulp] task manager, to handle distribution and development tasks.

*   [BrowserSync][bsnc] as supporting development server.

*   [EditorConfig][edcf] support, for consistent editor configuration between
    collaborators—check if EditorConfig support is available for your code
    editor.

*   [JSHint][jsht] code linting tool.

*   [Bower][bowr] component management.

*   [localForage][lofr] for client-side data storage, including Phaser plugin.

*   [Traceur Compiler][trcr] to translate JavaScript-of-the-near-future to
    JavaScript-of-today syntax. See which [language features][tclf] are
    currently supported.


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
npm run build # Builds the final product.
npm run clean # Wipes the project from temporary and distribution build files.
```


License
-------------------------------------------------------------------------------

All source code distributed under the terms of the [MIT License][lcnc].

Parts of this project are based on [slush-phaser-project][sspp], by [Sean
Bohan (@pixelpicosean)][ppsn].


<!-- ---------------------------------------------------------------------- -->

[bowr]: http://bower.io/
[phsr]: http://phaser.io/
[gulp]: http://gulpjs.com/
[jsht]: http://jshint.com/
[edcf]: http://editorconfig.org/
[bsnc]: http://www.browsersync.io/
[ppsn]: https://github.com/pixelpicosean/
[lofr]: http://mozilla.github.io/localForage/
[trcr]: https://github.com/google/traceur-compiler/
[sspp]: https://github.com/pixelpicosean/slush-phaser-project
[tclf]: https://github.com/google/traceur-compiler/wiki/LanguageFeatures
[lcnc]: https://github.com/rblopes/my-phaser-template/blob/master/LICENSE
