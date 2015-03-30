module.exports = {
  meta: {
    'title': 'My Awesome Game',
    'description': 'A Phaser project template, featuring Babel and localForage.'
  },
  dirs: {
    'dist'      : 'dist',
    'build'     : 'build',
    'static'    : 'static',
    'assets'    : 'static/assets',
    'states'    : 'src/scripts/app/states',
    'atlases'   : 'src/scripts/app/data/atlases',
    'objects'   : 'src/scripts/app/objects',
    'plugins'   : 'src/scripts/app/plugins',
    'partials'  : 'src/views/partials',
    'raw-assets': 'src/raw-assets'
  },
  globs: {
    'views'  : 'src/views/*.hbs',
    'styles' : 'src/styles/*.less',
    'assets' : 'static/**',
    'scripts': 'src/scripts/**/*.js'
  },
  pluginOptions: {
    'dev:build:scripts': {
      'modules': 'amd',
      'moduleIds': true
    },
    'dist:styles': {
      'keepSpecialComments': false,
      'removeEmpty': true
    },
    'dist:appcache': {
      'filename': 'offline.appcache',
      'cache': [
        'game.min.js',
        'styles.min.css'
      ],
      'preferOnline': true,
      'timestamp': true,
      'network': [
        'https://*',
        'http://*',
        '*'
      ],
      'fallback': [
        '. index.html'
      ]
    }
  }
};
