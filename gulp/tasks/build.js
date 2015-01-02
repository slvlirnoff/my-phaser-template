var runSequence    = require('run-sequence');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var paths           = config.paths;
  var bootSnippet     = config.bootSnippet;
  var appcacheOptions = config.appcacheOptions;

  gulp.task('build:templates', function () {
    return gulp.src(paths['templates'])
      .pipe(handleErrors())
      .pipe($.processhtml('index.html'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('build:css', [ 'compile:css' ], function () {
    return gulp.src(paths['temp'] + '/style.css')
      .pipe(handleErrors())
      .pipe($.minifyCss({
        keepSpecialComments: false,
        removeEmpty: true
      }))
      .pipe($.rename('style.min.css'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('build:js', [ 'compile:js' ], function () {
    var files = mainBowerFiles().concat(paths['temp'] + '/game.js');

    return gulp.src(files)
      .pipe($.sourcemaps.init())
      .pipe($.concat('game.min.js'))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('build:assets', function () {
    return gulp.src(paths['assets'])
      .pipe(handleErrors())
      .pipe(gulp.dest(paths['dist']))
      .pipe($.manifest(appcacheOptions))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('build', function (done) {
    runSequence('clean', [
      'build:templates',
      'build:css',
      'build:js',
      'build:assets'
    ], done);
  });

};
