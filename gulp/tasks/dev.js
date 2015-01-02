var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');


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
    gulp.watch(globs['scripts'], [ 'build:js' ])
      .on('changed', forget('scripts'));

    gulp.watch(globs['less'],      [       'build:css' ]);
    gulp.watch(globs['templates'], [ 'build:templates' ]);
  });

  gulp.task('dev:jshint', function () {
    return gulp.src([ globs['scripts'] ])
      .pipe(handleErrors())
      .pipe($.cached('jshint'))
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  gulp.task('dev', [
    'dev:server',
    'dev:watch'
  ]);

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
