var del = require('del');


module.exports = function (gulp, $, config) {

  var dirs  = config.dirs;
  var globs = config.globs;

  gulp.task('clean', function (cb) {
    del([ dirs['build'], dirs['dist'] ], cb);
  });

  // Aliasing `dev` as default task.
  gulp.task('default', [ 'dev' ]);

};
