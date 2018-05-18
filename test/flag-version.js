'use strict';

var expect = require('expect');
var runner = require('./lib/runner');

var version = require('../package.json').version;

describe('flag: --version', function() {

  it('print the CLI version', function(done) {
    runner().command('--version').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual('Version: ' + version);
      done(err);
    });
  });

});
