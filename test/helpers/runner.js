'use strict';

var exec = require('child_process').exec;
var pathfinder = require('./pathfinder');
var minimist = require('./minimist');

function wpvizir(command) {
  return 'node ' + pathfinder().wpvizir() + ' ' + command;
}

function eraseTime(text) {
  return ('\n' + text).replace(/(\r\n|\r|\n)\[[0-9:]{8}\] /g, '\n').slice(1).trim();
}

var runner = {
  command: function(command) {
    command = wpvizir(command);
    return { command: command, run: this.run }
  },
  commandDo: function(commandObj, commandStr) {
    this.ignoreLog(function() {
      return commandObj.do(minimist(commandStr));
    });
  },
  ignoreLog: function(whatToDo) {
    var oldLog = console.log;
    console.log = function() {};

    var returnValue = whatToDo();
    console.log = oldLog;

    return returnValue;
  },
  run: function(callback) {
    return exec(this.command, function(err, stdout, stderr) {
      stdout = eraseTime(stdout);
      callback(err, stdout, stderr)
    });
  }
};

module.exports = runner;
