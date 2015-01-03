var SRC      = 'src';
var BUILD    = 'build';
var DIST     = 'dist';
var STATIC   = 'static';
var PARTIALS = SRC + '/views/partials';

module.exports = {

  'dirs': {
    'dist'    : DIST,
    'build'   : BUILD,
    'static'  : STATIC,
    'partials': PARTIALS
  },

  'globs': {
    'views'  : SRC    + '/views/*.hbs',
    'styles' : SRC    + '/styles/*.less',
    'assets' : STATIC + '/**',
    'scripts': SRC    + '/scripts/**/*.js'
  },

  'pluginOptions': {
    'dev:build:scripts': {
      modules: 'amd',
      moduleIds: true,
      format: {
        comments: false,
        compact: true
      }
    },

    'dist:styles': {
      keepSpecialComments: false,
      removeEmpty: true
    },

    'dist:appcache': {
      filename: 'offline.appcache',
      cache: [
        'game.min.js',
        'styles.min.css'
      ],
      preferOnline: true,
      timestamp: true,
      network: [
        'https://*',
        'http://*',
        '*'
      ],
      fallback: [
        '/ /index.html'
      ]
    }
  }

};
