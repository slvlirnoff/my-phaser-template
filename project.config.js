module.exports = {

  'paths': {
    'src'   : 'src',
    'dist'  : 'build',
    'static': 'static',
    'temp'  : '.tmp',

    get less      () { return this['src'] + '/styles/*.less' },
    get assets    () { return this['static'] + '/**' },
    get scripts   () { return this['src'] + '/scripts/**/*.js' },
    get templates () { return this['src'] + '/templates/*.hbs' }
  },

  'compilerOptions': {
    modules: 'amd',
    moduleIds: true,
    format: {
      comments: false,
      compact: true
    }
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
