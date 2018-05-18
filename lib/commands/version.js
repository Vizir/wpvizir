'use strict';

var logger = require('../logger');

function version() {
  var version = require('../../package.json').version;
  logger.info('Version: ' + version);
}

module.exports = version;
