var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();
var tasks  = require('require-dir')('./gulp/tasks');
var config = require('./project.config');

for (var task in tasks)
  tasks[task](gulp, $, config);
