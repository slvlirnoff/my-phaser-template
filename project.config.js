var SRC      = 'src';
var BUILD    = 'build';
var DIST     = 'dist';
var STATIC   = 'static';
var PARTIALS = SRC + '/templates/partials';

var STYLES_GLOB    = SRC    + '/styles/*.less';
var ASSETS_GLOB    = STATIC + '/**';
var SCRIPTS_GLOB   = SRC    + '/scripts/**/*.js';
var TEMPLATES_GLOB = SRC    + '/templates/*.hbs';

module.exports = {

  'dirs': {
    'dist'    : DIST,
    'temp'    : BUILD,
    'static'  : STATIC,
    'partials': PARTIALS
  },

  'globs': {
    'styles'   : STYLES_GLOB,
    'assets'   : ASSETS_GLOB,
    'scripts'  : SCRIPTS_GLOB,
    'templates': TEMPLATES_GLOB
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
