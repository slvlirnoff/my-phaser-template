/**
 * Browserify/Watchify support module.
 * ============================================================================
 */

'use strict';


var assign     = require('lodash.assign');
var watchify   = require('watchify');
var browserify = require('browserify');


// Create a Browserify bundler for the application with the given
// configuration.
function createBundler (config, withWatchify) {
  config = config || {};

  if (withWatchify) {
    // Return a Watchify bundler for live development instead.
    return watchify(browserify(assign({}, watchify.args, config)));
  }

  return browserify(config || {});
}


// Remember the bundler instance.
var bundler = null;


// Get the current bundler instance.
function getBundler (config, withWatchify) {
  if (!bundler) {
    // Initialize the bundler for the first time.
    bundler = createBundler(config, withWatchify);
  }

  return bundler;
}


module.exports = function (config) {

  return function (withWatchify) {
    return getBundler(config, withWatchify);
  };

};
