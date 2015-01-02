var reload         = require('browser-sync').reload;
var autoprefixer   = require('autoprefixer-core');
var handleErrors   = require('../util/handleErrors');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var dirs            = config.dirs;
  var globs           = config.globs;
  var compilerOptions = config.compilerOptions;

  gulp.task('build:templates', function () {
    return gulp.src(globs['templates'])
      .pipe($.compileHandlebars(null, {
        batch: dirs['partials']
      }))
      .pipe($.rename({ extname: '.html' }))
      .pipe(gulp.dest(dirs['build']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('build:css', function () {
    return gulp.src(globs['styles'])
      .pipe(handleErrors())
      .pipe($.sourcemaps.init())
      .pipe($.less())
      .pipe($.postcss([
        autoprefixer()
      ]))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs['build']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('build:js', [ 'dev:jshint' ], function () {
    return gulp.src(globs['scripts'])
      .pipe(handleErrors())
      .pipe($.cached('scripts'))
      .pipe($.sourcemaps.init())
      .pipe($['6to5'](compilerOptions))
      .pipe($.remember('scripts'))
      .pipe($.concat('game.js'))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(dirs['build']))
      .pipe(reload({ stream: true }));
  });

  gulp.task('build:bundle', function () {
    var libs = [ 'node_modules/6to5/browser-polyfill.js' ]
      .concat(mainBowerFiles());

    return gulp.src(libs)
      .pipe($.concat('bower-libs.js'))
      .pipe(gulp.dest(dirs['build']));
  });

  gulp.task('build', [
    'build:bundle',
    'build:js',
    'build:templates',
    'build:css'
  ]);

};
