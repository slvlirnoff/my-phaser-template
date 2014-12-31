var del          = require('del');
var handleErrors = require('../util/handleErrors');


module.exports = function (gulp, $, config) {

  var paths = config.paths;

  gulp.task('jshint', function () {
    return gulp.src([ paths['scripts'] ])
      .pipe(handleErrors())
      .pipe($.cached('jshint'))
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  gulp.task('clean', function (cb) {
    del([ paths['temp'], paths['dist'] ], cb);
  });

};
