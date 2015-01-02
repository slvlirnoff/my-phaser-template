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

  gulp.task('dev:server', [ 'build' ], function () {
    browserSync({
      server: {
        baseDir: [
          dirs['static'],
          dirs['build']
        ]
      },
      ghostMode: false,
      notify: false
    });
  });

  gulp.task('dev:watch', function () {
    gulp.watch(dirs['scripts'], [ 'build:js' ])
      .on('changed', forget('scripts'));

    gulp.watch(dirs['less'],      [       'build:css' ]);
    gulp.watch(dirs['templates'], [ 'build:templates' ]);
  });

  gulp.task('dev', [
    'dev:server',
    'dev:watch'
  ]);

};
