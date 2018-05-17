'use strict';

var wpvizir = require('../'),
    assert = require('assert');

describe('wpvizir', function() {
  it('should print Hello World when running command', function() {
    assert.equal( wpvizir(), console.log( 'Hello World' ) );
  });
});