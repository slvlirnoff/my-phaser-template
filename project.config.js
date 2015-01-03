var SRC      = 'src';
var BUILD    = 'build';
var DIST     = 'dist';
var STATIC   = 'static';
var PARTIALS = SRC + '/templates/partials';

var VIEWS_GLOB   = SRC    + '/templates/*.hbs';
var STYLES_GLOB  = SRC    + '/styles/*.less';
var ASSETS_GLOB  = STATIC + '/**';
var SCRIPTS_GLOB = SRC    + '/scripts/**/*.js';

module.exports = {

  'dirs': {
    'dist'    : DIST,
    'build'   : BUILD,
    'static'  : STATIC,
    'partials': PARTIALS
  },

  'globs': {
    'views'  : VIEWS_GLOB,
    'styles' : STYLES_GLOB,
    'assets' : ASSETS_GLOB,
    'scripts': SCRIPTS_GLOB
  },

  'compilerOptions': {
    modules: 'amd',
    moduleIds: true,
    format: {
      comments: false,
      compact: true
    }
  },

  'minifyCssOptions': {
    keepSpecialComments: false,
    removeEmpty: true
  },

  'appcacheOptions': {
    filename: 'offline.appcache',
    cache: [
      'game.min.js',
      'style.min.css'
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

};
