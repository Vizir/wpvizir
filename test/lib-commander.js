'use strict';

var commander = require('../lib/commander');

var assert = require('assert');
var expect = require('expect');
var fs = require('fs-extra');
var pathfinder = require('./lib/pathfinder');

// var runner = require('./lib/runner');

describe('lib: commander', function() {

  it('should receive a command and run a module inside it\'s directory passing env', function(done) {
    var testFile = pathfinder().find('./test/fixtures/commander-test.js'),
        movedFile = pathfinder().find('./lib/commands/commandertest.js');

    fs.copy(testFile, movedFile)
      .then(function() {
        expect(commander('commandertest', {env: 'test'})).toEqual('commander-test');

        fs.remove(movedFile, done);
      })
      .catch(function(error) {
        assert.fail(error);
      });
  });

});
