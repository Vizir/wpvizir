'use strict';

var expect = require('expect');
var runner = require('./helpers/runner');

var version = require('../package.json').version;
var __ = require('../lib/translater');

describe('wpvizir', function() {

  it('should print nothing if running no valid command/flag', function(done) {
    runner().command('').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual('');

      done(err);
    });
  });

  it('should print config that\'s not the version if running config command', function(done) {
    runner().command('config').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).not.toContain(__('Version: %s', version));

      done(err);
    });
  });

});
