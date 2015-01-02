var del          = require('del');
var handleErrors = require('../util/handleErrors');


module.exports = function (gulp, $, config) {

  var paths = config.paths;
  var globs = config.globs;

  gulp.task('jshint', function () {
    return gulp.src([ globs['scripts'] ])
      .pipe(handleErrors())
      .pipe($.cached('jshint'))
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  gulp.task('clean', function (cb) {
    del([ paths['temp'], paths['dist'] ], cb);
  });

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
