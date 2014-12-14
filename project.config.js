module.exports = {

  'paths': {
    'src'   : 'src',
    'dist'  : 'build',
    'static': 'static',
    'temp'  : '.tmp',

    get less    () { return this[ 'src' ] + '/styles/*.less'; },
    get scripts () { return this[ 'src' ] + '/scripts/**/*.js'; }
  },

  'traceurOptions': {
    modules: 'register',
    moduleName: true,
    sourceMaps: 'inline'
  },

  'bootSnippet': "\n;!function(A){A.start();}(System.get('app')['default']);"

};
