/*
 * Internal development supporting tasks.
 * ============================================================================
 */

'use strict';


module.exports = function (gulp, $) {

  gulp.task('tasks:lint', function () {
    gulp.src('gulpfile.js/**/*.js')
      .pipe($.jshint('gulpfile.js/.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

};
