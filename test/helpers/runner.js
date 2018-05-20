'use strict';

var exec = require('child_process').exec;
var pathfinder = require('./pathfinder');
var minimist = require('./minimist');
var helper = require('../../lib/cli/helper');

var expect = require('expect');

function wpvizir(command) {
  return 'node ' + pathfinder().wpvizir() + ' ' + command;
}

function eraseTime(text) {
  return ('\n' + text).replace(/(\r\n|\r|\n)\[[0-9:]{8}\] /g, '\n').slice(1).trim();
}

function run(command, callback) {
  return exec(command, function(err, stdout, stderr) {
    stdout = eraseTime(stdout);
    callback(err, stdout, stderr)
  });
}

function checkHelper(command, helperId, done) {
  var expected = helper(helperId, true);

  run(command, function(err, stdout, stderr) {
    expect(err).toEqual(null);
    expect(stderr).toEqual('');
    expect(stdout).toEqual(expected);

    done(err);
  });
}

var runner = {
  command: function(command) {
    command = wpvizir(command);
    return {
      command: command,
      checkHelper: function(helperId, done) {
        return checkHelper(this.command, helperId, done);
      },
      run: function(callback) {
        return run(this.command, callback);
      }
    }
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
  }
};

module.exports = runner;
