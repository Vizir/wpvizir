'use strict';

var helper = require('../../../lib/cli/helper');
var __ = require('../../../lib/translater');

var expect = require('expect');
var runner = require('../../helpers/runner');

describe('lib: cli/helper', function() {

  it('should log something is missing', function(done) {
    runner().command('config').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual(__('Something is missing.'));

      done(err);
    });
  });

});
