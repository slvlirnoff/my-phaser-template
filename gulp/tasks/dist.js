var runSequence    = require('run-sequence');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var dirs             = config.dirs;
  var globs            = config.globs;
  var appcacheOptions  = config.appcacheOptions;
  var minifyCssOptions = config.minifyCssOptions;

  gulp.task('dist:templates', [ 'build:templates' ], function () {
    return gulp.src(dirs['build'] + '/*.html')
      .pipe(handleErrors())
      .pipe($.processhtml())
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist:css', [ 'build:css' ], function () {
    return gulp.src(dirs['build'] + '/style.css')
      .pipe(handleErrors())
      .pipe($.minifyCss(minifyCssOptions))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist:js', [ 'build:js' ], function () {
    var files = mainBowerFiles().concat(dirs['build'] + '/game.js');

    return gulp.src(files)
      .pipe($.sourcemaps.init())
      .pipe($.concat('game.min.js'))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist:assets', function () {
    return gulp.src(globs['assets'])
      .pipe(handleErrors())
      .pipe(gulp.dest(dirs['dist']))
      .pipe($.manifest(appcacheOptions))
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist', function (done) {
    runSequence('clean', [
      'dist:templates',
      'dist:css',
      'dist:js',
      'dist:assets'
    ], done);
  });

};
