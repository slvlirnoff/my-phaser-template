/*
 * Webpack Configuration
 * ============================================================================
 */

'use strict';


module.exports = {

  output: {
    filename: 'game.js',
    library: 'app',
    libraryTarget: 'var'
  },

  debug: true,
  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          optional: [ 'runtime' ]
        }
      }
    ]
  }

};
