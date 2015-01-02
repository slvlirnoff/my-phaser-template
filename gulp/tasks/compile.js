var reload         = require('browser-sync').reload;
var autoprefixer   = require('autoprefixer-core');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var paths           = config.paths;
  var compilerOptions = config.compilerOptions;

  gulp.task('compile:templates', function () {
    return gulp.src(paths['templates'])
      .pipe($.compileHandlebars(null, {
        batch: paths['partials']
      }))
      .pipe($.rename({ extname: '.html' }))
      .pipe(gulp.dest(paths['temp']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('compile:css', function () {
    return gulp.src(paths['less'])
      .pipe(handleErrors())
      .pipe($.less())
      .pipe($.postcss([
        autoprefixer()
      ]))
      .pipe($.concat('style.css'))
      .pipe(gulp.dest(paths['temp']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('compile:js', [ 'jshint' ], function () {
    return gulp.src(paths['scripts'])
      .pipe(handleErrors())
      .pipe($.cached('scripts'))
      .pipe($.sourcemaps.init())
      .pipe($['6to5'](compilerOptions))
      .pipe($.remember('scripts'))
      .pipe($.concat('game.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(paths['temp']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('compile:bundle', function () {
    var libs = [ 'node_modules/6to5/browser-polyfill.js' ]
      .concat(mainBowerFiles());

    return gulp.src(libs)
      .pipe($.concat('bower-libs.js'))
      .pipe(gulp.dest(paths['temp']));
  });

  gulp.task('compile', [
    'compile:bundle',
    'compile:js',
    'compile:templates',
    'compile:css'
  ]);

};
