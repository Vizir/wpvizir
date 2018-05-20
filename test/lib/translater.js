'use strict';

var expect = require('expect');
var translater = require('../../lib/translater');
var configurator = require('../../lib/configurator');

describe('translater', function() {

  it('should translate the string', function(done) {
    var locale = configurator.get('locale');

    configurator.set('locale', 'pt_BR');
    expect(translater('Version: %s')).toEqual('Versão: %s');
    configurator.set('locale', locale);

    done(0);
  });

  it('should translate the string with values as string', function(done) {
    var locale = configurator.get('locale');

    configurator.set('locale', 'pt_BR');
    expect(translater('Version: %s', '0.0.0')).toEqual('Versão: 0.0.0');
    configurator.set('locale', locale);

    done(0);
  });

  it('should translate the string with values as object', function(done) {
    var locale = configurator.get('locale');

    configurator.set('locale', 'pt_BR');
    expect(translater('Version: {version}', {version: '0.0.0'})).toEqual('Versão: 0.0.0');
    configurator.set('locale', locale);

    done(0);
  });

  it('should not translate if locale is invalid', function(done) {
    var locale = configurator.get('locale');

    configurator.set('locale', 'ofcourseanotvalidlocale');
    expect(translater('Version: %s', '0.0.0')).toEqual('Version: 0.0.0');
    configurator.set('locale', locale);

    done(0);
  });


  it('should return the string with no translations are found', function(done) {
    expect(translater('Of course there\'s no translation for that')).toEqual('Of course there\'s no translation for that');
    done(0);
  });

});
