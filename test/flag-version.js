'use strict';

var expect = require('expect');
var runner = require('./helpers/runner');

var version = require('../package.json').version;
var __ = require('../lib/translater');

describe('flag: --version', function() {

  it('print the CLI version using --version', function(done) {
    runner().command('--version').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual(__('Version: %s', version));

      done(err);
    });
  });

  it('print the CLI version using -v', function(done) {
    runner().command('-v').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual(__('Version: %s', version));

      done(err);
    });
  });

});
