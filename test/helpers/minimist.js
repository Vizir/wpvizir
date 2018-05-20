'use strict';

var theminimist = require('minimist');

function minimist(command) {
  var minimistOpts = {
    boolean: [ 'version', 'global', 'local' ],
    string: [ 'set', 'get' ]
  };

  return theminimist(command.split(' '), minimistOpts);
}

module.exports = minimist;
