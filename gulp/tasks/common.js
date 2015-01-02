var del          = require('del');
var handleErrors = require('../util/handleErrors');


module.exports = function (gulp, $, config) {

  var dirs  = config.dirs;
  var globs = config.globs;

  gulp.task('jshint', function () {
    return gulp.src([ globs['scripts'] ])
      .pipe(handleErrors())
      .pipe($.cached('jshint'))
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  gulp.task('clean', function (cb) {
    del([ dirs['temp'], dirs['dist'] ], cb);
  });

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
