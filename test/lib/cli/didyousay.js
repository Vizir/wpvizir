'use strict';

var didyousay = require('../../../lib/cli/didyousay');
var __ = require('../../../lib/translater');

var expect = require('expect');
var runner = require('../../helpers/runner');

describe('lib: cli/didyousay', function() {

  it('should return false if there\'s no suggestion', function(done) {
    expect(didyousay('ofcoursethereisnosuggestionforthat')).toBe(false);
    done();
  });

  it('should log suggestion', function(done) {
    runner.command('version').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual(__('Did you want to say that?') + "\n" + '    wpvizir --version');

      done(err);
    });
  });

  it('should return suggestion for: --version', function(done) {
    expect( runner.ignoreLog( () => { return didyousay('v'); } ) ).toBeTruthy();
    expect( runner.ignoreLog( () => { return didyousay('version'); } ) ).toBeTruthy();

    done();
  });

});
