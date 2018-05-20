'use strict';

var config = require('../../../lib/commands/config');

var __ = require('../../../lib/translater');
var configurator = require('../../../lib/configurator');

var expect = require('expect');
var runner = require('../../helpers/runner');
var minimist = require('../../helpers/minimist');

describe('command: config set', function() {

  it('should set global configs', function(done) {
    var locale = configurator.get('locale');

    config.setGlobalConfig('locale', 'ofcourseanotvalidlocale');
    runner.commandDo(config, 'config set --global locale ofcourseanotvalidlocale'); // Not necessary test DO

    var newLocale = configurator.get('locale');
    expect(newLocale).toEqual('ofcourseanotvalidlocale');

    config.setGlobalConfig('locale', locale);
    runner.commandDo(config, 'config set --global locale ' + locale); // Not necessary test DO

    done(0);
  });

  it('should set global config missing argument', function(done) {
    runner.command('config set --global missingthevaluetothisoption').checkHelper('wpvizir config set', done);
  });

  it('should set global configs with TRUE/FALSE', function(done) {
    var locale = configurator.get('locale');

    config.setGlobalConfig('ofcourseitsnotatruthyconfig', 'true');
    config.setGlobalConfig('ofcourseitsnotafalsyconfig', 'false');

    var trueConfig = configurator.get('ofcourseitsnotatruthyconfig');
    expect(trueConfig).toBe(true);

    var falseConfig = configurator.get('ofcourseitsnotafalsyconfig');
    expect(falseConfig).toBe(false);

    done(0);
  });

});
