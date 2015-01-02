module.exports = {

  'paths': {
    'src'   : 'src',
    'dist'  : 'build',
    'static': 'static',
    'temp'  : '.tmp',

    get less      () { return this['src'] + '/styles/*.less' },
    get assets    () { return this['static'] + '/**' },
    get scripts   () { return this['src'] + '/scripts/**/*.js' },
    get templates () { return this['src'] + '/templates/*.hbs' },
    get partials  () { return this['src'] + '/templates/partials' }
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
