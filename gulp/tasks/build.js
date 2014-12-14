var del            = require('del');
var runSequence    = require('run-sequence');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var paths       = config.paths;
  var bootSnippet = config.bootSnippet;

  gulp.task('clean', function (cb) {
    del([ paths['temp'], paths['dist'] ], cb);
  });

  gulp.task('processHtml', function () {
    return gulp.src(paths['src'] + '/index.html')
      .pipe(handleErrors())
      .pipe($.processhtml('index.html'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('minifyCss', [ 'less' ], function () {
    return gulp.src(paths['temp'] + '/style.css')
      .pipe(handleErrors())
      .pipe($.minifyCss({
        keepSpecialComments: false,
        removeEmpty: true
      }))
      .pipe($.rename('style.min.css'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('uglify', [ 'traceur' ], function () {
    var files = mainBowerFiles().concat('./.tmp/game.js');

    return gulp.src(files)
      .pipe($.sourcemaps.init())
      .pipe($.concat('game.min.js'))
      .pipe($.footer(bootSnippet))
      .pipe($.uglify())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('processAssets', function () {
    gulp.src([
      'static/**',
      '!static/bower_components',     // Workaround to ensure both directory
      '!static/bower_components/**'   // and its contents don't get copied.
    ])
      .pipe(handleErrors())
      .pipe(gulp.dest(paths['dist']));
  });

  gulp.task('build', function (done) {
    runSequence('clean', [
      'processHtml',
      'minifyCss',
      'uglify',
      'processAssets'
    ], done);
  });

};
