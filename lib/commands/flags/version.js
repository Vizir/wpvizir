'use strict';

var logger = require('../../logger');
var __ = require('../../translater');

var version = {
  getVersion: function() {
    var version = require('../../../package.json').version;
    return __('Version: %s', version);
  },
  do: function() {
    logger.info(this.getVersion());
  }
}

module.exports = version;
