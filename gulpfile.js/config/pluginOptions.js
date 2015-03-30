module.exports = {
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
};
