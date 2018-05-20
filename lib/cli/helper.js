'use strict';

var logger = require('../logger');
var __ = require('../translater');

function helper(command) {
  var text = __('Something is missing.');
  logger.info(text);
}

module.exports = helper;
