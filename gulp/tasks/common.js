var reload       = require('browser-sync').reload;
var handleErrors = require('../util/handleErrors');


module.exports = function (gulp, $, config) {

  var paths          = config.paths;
  var traceurOptions = config.traceurOptions;

  gulp.task('html', function () {
    return gulp.src(paths['src'] + '/index.html')
      .pipe(gulp.dest(paths[ 'temp' ]))
      .pipe(reload({ stream: true }));
  });

  gulp.task('less', function () {
    return gulp.src(paths['less'])
      .pipe(handleErrors())
      .pipe($.less())
      .pipe($.concat('style.css'))
      .pipe(gulp.dest(paths['temp']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('jshint', function () {
    return gulp.src([ paths['scripts'] ])
      .pipe(handleErrors())
      .pipe($.cached('jshint'))
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  gulp.task('traceur', [ 'jshint' ], function () {
    return gulp.src(paths['scripts'])
      .pipe(handleErrors())
      .pipe($.sourcemaps.init({ loadMaps: true }))
      .pipe($.traceur(traceurOptions))
      .pipe($.concat('game.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(paths['temp']))
      .pipe(reload({ stream: true }));
  });

};
