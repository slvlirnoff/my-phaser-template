Change Log
===============================================================================


v0.1.8
-------------------------------------------------------------------------------

*   Upgrade some gulp plugin versions


v0.1.7
-------------------------------------------------------------------------------

*   Upgrade task plug-in `gulp-processhtml`


v0.1.6
-------------------------------------------------------------------------------

*   Make incremental builds actually work
*   Remove obsolete Babel `format` option from project configuration
*   Update mentions to Babel in project metadata and README, some other minor 
    changes
*   Use `gulp-filter` instead of `gulp-if` when filtering bundled scripts
*   Upgrade `gulp-minify-css`


v0.1.5
-------------------------------------------------------------------------------

*   Upgrade plug-in `gulp-less`
*   Replacing 6to5 by Babel, due to the project name change.


v0.1.4
-------------------------------------------------------------------------------

*   Upgrade to BrowserSync 2.0


v0.1.3
-------------------------------------------------------------------------------

*   Solve issue #1, where 6to5 may compile code with syntax errors formatted 
    with the `compact` option (thanks @dfyx)


v0.1.2
-------------------------------------------------------------------------------

*   Reverted game states to class instances
*   Upgraded some development dependencies, 6to5


v0.1.1
-------------------------------------------------------------------------------

*   Force UTF-8 encoding by default in new files
*   Comments as hints in task files
*   Avoid including non-JS files in `bundle.js`
*   Crediting @Eruant in the README
*   Dependency upgrades


v0.1.0
-------------------------------------------------------------------------------

First public release, including:

*   6to5
*   Almond runtime dependency tracker
*   Bower component manager
*   BrowserSync development web server
*   EditorConfig support
*   Gulp task manager
*   Handlebars templates
*   JSHint code quality check support
*   LESS style sheets
*   Mozilla's localForage, with sample wrapper plugin
*   Offline Cache support in final builds
*   Phaser v2.2 game development framework
*   The sample game "My Awesome Game"
*   Early project configuration support
