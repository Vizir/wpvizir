'use strict';

var logger = require('../logger');
var __ = require('../translater');

function helper(command, shouldReturn) {
  if (shouldReturn !== true) {
    shouldReturn = false;
  }

  var text = __('Something is missing.');

  if (shouldReturn) {
    return text;
  }

  logger.info(text);
}

module.exports = helper;
