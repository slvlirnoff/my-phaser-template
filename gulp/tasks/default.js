var browserSync    = require('browser-sync');
var mainBowerFiles = require('main-bower-files');


module.exports = function (gulp, $, config) {

  var paths = config.paths;

  // Forget any cached data
  // Reference: https://github.com/gulpjs/gulp/blob/master/docs/recipes/incremental-builds-with-concatenate.md
  function forget (cacheName) {
    return function (e) {
      if (e.type === 'deleted') {
        $.remember.forget(cacheName, e.path);
        delete $.cached.caches[cacheName][e.path];
      }
    };
  }

  gulp.task('compile', [
    'bower-libs',
    '6to5',
    'html',
    'less'
  ]);

  gulp.task('bower-libs', function () {
    var libs = [ 'node_modules/6to5/browser-polyfill.js' ]
      .concat(mainBowerFiles());

    return gulp.src(libs)
      .pipe($.concat('bower-libs.js'))
      .pipe(gulp.dest(paths['temp']));
  });

  gulp.task('server', [ 'compile' ], function () {
    browserSync({
      server: {
        baseDir: [
          paths['static'],
          paths['temp']
        ]
      },
      ghostMode: false,
      notify: false
    });
  });

  gulp.task('watch', function () {
    gulp.watch(paths['scripts'], [ '6to5' ])
      .on('changed', forget('scripts'));

    gulp.watch(paths['less'],      [ 'less' ]);
    gulp.watch(paths['templates'], [ 'html' ]);
  });

  gulp.task('default', [
    'server',
    'watch'
  ]);

};
