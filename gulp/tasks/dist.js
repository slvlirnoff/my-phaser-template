var del            = require('del');
var runSequence    = require('run-sequence');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var dirs             = config.dirs;
  var globs            = config.globs;
  var appcacheOptions  = config.appcacheOptions;
  var minifyCssOptions = config.minifyCssOptions;

  gulp.task('dist:clean', function (done) {
    del([ dirs['build'], dirs['dist'] ], done);
  });

  gulp.task('dist:views', [ 'dev:build:views' ], function () {
    return gulp.src(dirs['build'] + '/*.html')
      .pipe(handleErrors())
      .pipe($.processhtml())
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist:styles', [ 'dev:build:styles' ], function () {
    return gulp.src(dirs['build'] + '/*.css')
      .pipe(handleErrors())
      .pipe($.minifyCss(minifyCssOptions))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest(dirs['dist']));
  });

  gulp.task('dist:scripts', [ 'dev:build:scripts' ], function () {
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
    runSequence('dist:clean', [
      'dist:views',
      'dist:styles',
      'dist:scripts',
      'dist:assets'
    ], done);
  });

};
