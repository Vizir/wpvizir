'use strict';

var expect = require('expect');
var configurator = require('../../lib/configurator');

describe('configurator', function() {

  it('should return default config', function(done) {
    expect(configurator.getDefault('locale')).toEqual('en');
    done(0);
  });

  it('should return false with there\'s no config', function(done) {
    expect(configurator.get('ofcourseitsnotavalidconfig')).toBeFalsy();
    done(0);
  });

  it('should modify local config', function(done) {
    var locale = configurator.get('locale');

    configurator.set('locale', 'ofcourseanotvalidlocale');
    expect(configurator.get('locale')).toEqual('ofcourseanotvalidlocale');

    configurator.set('locale', locale);
    expect(configurator.get('locale')).toEqual(locale);

    done(0);
  });

});
