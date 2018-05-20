'use strict';

var cliSuggestion = require('cli-suggestion');

var logger = require('../logger');
var __ = require('../translater');

var suggestion = cliSuggestion({
  suggestion: __('Did you want to say that?'),
  command: 'wpvizir',
  file: 'config/suggestions.json'
});

function didyousay(command) {
  var thesuggestion = suggestion(command);
  if (thesuggestion) {
    logger.info(suggestion(command));
    return true;
  }

  return false;
}

module.exports = didyousay;
