var browserSync = require('browser-sync');


module.exports = function (gulp, $, config) {

  var dirs  = config.dirs;
  var globs = config.globs;

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

  gulp.task('dev:server', [ 'compile' ], function () {
    browserSync({
      server: {
        baseDir: [
          dirs['static'],
          dirs['temp']
        ]
      },
      ghostMode: false,
      notify: false
    });
  });

  gulp.task('dev:watch', function () {
    gulp.watch(dirs['scripts'], [ 'compile:js' ])
      .on('changed', forget('scripts'));

    gulp.watch(dirs['less'],      [       'compile:css' ]);
    gulp.watch(dirs['templates'], [ 'compile:templates' ]);
  });

  gulp.task('dev', [
    'dev:server',
    'dev:watch'
  ]);

};
