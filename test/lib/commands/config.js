'use strict';

var expect = require('expect');
var config = require('../../../lib/commands/config');

var minimist = require('../../helpers/minimist');
var __ = require('../../../lib/translater');

describe('command: config', function() {

  it('should print project configs', function(done) {
    var options = minimist('config list');

    var projectConfigs = config.listProjectOptions();

    expect(projectConfigs).not.toBe(__('These are your project configs:'));
    done(0);
  });

  it('should print global configs', function(done) {
    var options = minimist('config list --global');

    var globalConfigs = config.listGlobalOptions();

    expect(globalConfigs).not.toBe(__('These are your global configs:'));
    done(0);
  });

});
