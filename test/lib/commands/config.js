'use strict';

var config = require('../../../lib/commands/config');

var __ = require('../../../lib/translater');
var configurator = require('../../../lib/configurator');

var expect = require('expect');
var runner = require('../../helpers/runner');
var minimist = require('../../helpers/minimist');

describe('command: config', function() {

  it('should print project configs', function(done) {
    var projectConfigs = config.listProjectOptions();
    runner.commandDo(config, 'config list'); // Not necessary test DO

    expect(projectConfigs).not.toBe(__('These are your project configs:'));
    done(0);
  });

  it('should print global configs', function(done) {
    var globalConfigs = config.listGlobalOptions();
    runner.commandDo(config, 'config list --global'); // Not necessary test DO

    expect(globalConfigs).not.toBe(__('These are your global configs:'));
    done(0);
  });

});
