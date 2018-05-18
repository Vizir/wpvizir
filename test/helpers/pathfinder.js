'use strict';

var fined = require('fined');
var path = require('path');

function pathfinder() {
  function findCli() {
    try {
      return path.join(require.resolve('wpvizir'), '../bin/wpvizir.js');
    } catch (e) {
      var found = fined({
        path: 'bin/wpvizir',
        extensions: '.js',
        findUp: true
      });

      if (found) {
        return found.path;
      }

      throw e;
    }
  }

  function findPackagePath() {
    var found = fined({ path: 'package', extensions: '.json', findUp: true });
    if (found) {
      return path.join(found.path, '..');
    }

    return path.resolve('.');
  }

  return {
    wpvizir: findCli,
    root: findPackagePath,
    find: function(filepath) {
      return path.join(findPackagePath(), filepath);
    }
  }
}

module.exports = pathfinder;
