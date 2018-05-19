'use strict';

var expect = require('expect');
var runner = require('./helpers/runner');

describe('wpvizir', function() {

  it('print nothing', function(done) {
    runner().command('').run(function(err, stdout, stderr) {
      expect(err).toEqual(null);
      expect(stderr).toEqual('');
      expect(stdout).toEqual('');

      done(err);
    });
  });

});
