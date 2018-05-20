'use strict';

var configurator = require('../configurator');
var helper = require('../cli/helper');
var logger = require('../logger');

function config(options, env) {
  if (options._.length < 2) {
    helper('wpvizir config');
    return;
  }
}

module.exports = config;
