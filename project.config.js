var SRC    = 'src';
var BUILD  = 'build';
var DIST   = 'dist';
var STATIC = 'static';

var STYLES_DIR    = SRC           + '/styles';
var SCRIPTS_DIR   = SRC           + '/scripts';
var TEMPLATES_DIR = SRC           + '/templates';
var PARTIALS_DIR  = TEMPLATES_DIR + '/partials';

var STYLES_GLOB    = STYLES_DIR    + '/*.less';
var ASSETS_GLOB    = STATIC        + '/**';
var SCRIPTS_GLOB   = SCRIPTS_DIR   + '/**/*.js';
var TEMPLATES_GLOB = TEMPLATES_DIR + '/*.hbs';

module.exports = {

  'paths': {
    'dist'     : DIST,
    'temp'     : BUILD,
    'static'   : STATIC,
    'partials' : PARTIALS_DIR,
    'templates': TEMPLATES_DIR
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
