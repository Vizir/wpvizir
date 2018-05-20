'use strict';

var expect = require('expect');
var runner = require('../../../helpers/runner');

var version = require('../../../../lib/commands/flags/version');
var __ = require('../../../../lib/translater');

var packageVersion = require('../../../../package.json').version;

describe('flag: --version', function() {

  it('print the version', function(done) {
    expect(version.getVersion()).toEqual(__('Version: %s', packageVersion));
    done();
  });

  it('print the version using CLI', function(done) {
    runner.command('-v').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual(__('Version: %s', packageVersion));

      done(err);
    });
  });

  it('do not print the CLI version if flag is after any command', function(done) {
    runner.command('anything --version').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).not.toContain(__('Version: %s', packageVersion));

      done(err);
    });
  });

});
