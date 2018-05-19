'use strict';

var logger = require('../logger');
var __ = require('../translater');

function createSuggestion(suggestion, tries) {
  return {
    suggestion: suggestion,
    tries: tries
  };
}

function didyousay(command) {
  const suggestions = [
    createSuggestion('--version', [ 'version', 'v' ])
  ];

  for (var i = 0; i < suggestions.length; i++) {
    for(var j = 0; j < suggestions[i].tries.length; j++) {
      if (suggestions[i].tries[j] != command) continue;

      var suggestion = __('Did want to say that?') + "\n" + "    wpvizir " + suggestions[i].suggestion;
      logger.info(suggestion);
      return;
    }
  }
}

module.exports = didyousay;
