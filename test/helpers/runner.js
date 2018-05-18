'use strict';

var exec = require('child_process').exec;
var pathfinder = require('./pathfinder');

function runner() {
  function wpvizir(command) {
    return 'node ' + pathfinder().wpvizir() + ' ' + command;
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

module.exports = runner;
