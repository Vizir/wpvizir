'use strict';

var config = require('../../../lib/commands/config');

var __ = require('../../../lib/translater');
var configurator = require('../../../lib/configurator');

var expect = require('expect');
var runner = require('../../helpers/runner');
var minimist = require('../../helpers/minimist');

describe('command: config get', function() {

  it('should get global configs', function(done) {
    var locale = configurator.get('locale');

    config.setGlobalConfig('locale', 'ofcourseanotvalidlocale');

    var newLocale = config.getGlobalConfig('locale');
    runner.commandDo(config, 'config get --global locale'); // Not necessary test DO

    expect(newLocale).toEqual('ofcourseanotvalidlocale');

    config.setGlobalConfig('locale', locale);

    done(0);
  });

  it('should get global configs - missing argument', function(done) {
    runner.command('config --global get').checkHelper('wpvizir config get', done);
  });

});
