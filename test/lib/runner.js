'use strict';

var exec = require('child_process').exec;
var path = require('path');
var fined = require('fined');

var path = findCli();

function runner() {
  function wpvizir(command) {
    return 'node ' + findCli() + ' ' + command;
  }

  function eraseTime(text) {
    return ('\n' + text).replace(/(\r\n|\r|\n)\[[0-9:]{8}\] /g, '\n').slice(1).trim();
  }

  return {
    command: function(command) {
      command = wpvizir(command);
      return { command: command, run: this.run }
    },
    run: function(callback) {
      exec(this.command, function(err, stdout, stderr) {
        stdout = eraseTime(stdout);
        callback(err, stdout, stderr)
      });
    }
  }
}

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

module.exports = runner;
