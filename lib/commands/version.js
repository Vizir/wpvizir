'use strict';

var logger = require('../logger');
var __ = require('../translater');

function version() {
  var version = require('../../package.json').version;
  logger.info(__('Version: %s', version));
}

module.exports = version;
