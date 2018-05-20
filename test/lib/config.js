'use strict';

var expect = require('expect');
var config = require('../../lib/config');

describe('config', function() {

  it('should return default config', function(done) {
    expect(config.getDefault('locale')).toEqual('en');
    done(0);
  });

  it('should return false with there\'s no config', function(done) {
    expect(config.get('ofcourseitsnotavalidconfig')).toBeFalsy();
    done(0);
  });

  it('should modify local config', function(done) {
    var locale = config.get('locale');

    config.set('locale', 'ofcourseanotvalidlocale');
    expect(config.get('locale')).toEqual('ofcourseanotvalidlocale');

    config.set('locale', locale);
    expect(config.get('locale')).toEqual(locale);

    done(0);
  });

});
