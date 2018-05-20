'use strict';

var expect = require('expect');
var translater = require('../../lib/translater');

describe('translater', function() {

  it('should translate the string', function(done) {
    expect(translater('Version: %s')).toEqual('Versão: %s');
    done(0);
  });

  it('should translate the string with values as string', function(done) {
    expect(translater('Version: %s', '0.0.0')).toEqual('Versão: 0.0.0');
    done(0);
  });

  it('should translate the string with values as object', function(done) {
    expect(translater('Version: {version}', {version: '0.0.0'})).toEqual('Versão: 0.0.0');
    done(0);
  });

  it('should return the string with no translations are found', function(done) {
    expect(translater('Of course there\'s no translation for that')).toEqual('Of course there\'s no translation for that');
    done(0);
  });

});
