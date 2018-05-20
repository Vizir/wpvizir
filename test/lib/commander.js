'use strict';

var commander = require('../../lib/commander');

var assert = require('assert');
var expect = require('expect');
var fs = require('fs-extra');
var pathfinder = require('../helpers/pathfinder');

describe('lib: commander', function() {

  it('should receive a command and run a module inside it\'s directory passing env', function(done) {
    var testFile = pathfinder().find('./test/fixtures/commander-test.js'),
        movedFile = pathfinder().find('./lib/commands/commandertest.js');

    fs.copy(testFile, movedFile)
      .then(function() {
        expect(commander('commandertest')).toBe(true);

        fs.remove(movedFile, done);
      })
      .catch(function(error) {
        assert.fail(error);
      });
  });

  it('should return false if command don\'t exist', function(done) {
    expect(commander('ofcoursethiscommandisinvalid')).toBe(false);
    done(0);
  });

});
