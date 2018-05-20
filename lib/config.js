'use strict';

const configstore = require('configstore');

var dotProp = require('dot-prop');
var configDefault = require('../config/default.json');

const configuration = new configstore('wpvizir', configDefault, { globalConfigPath: true });

function config() {
  return {
    get: function(config) {
      console.log(configuration);
      return configuration.get(config);
    },
    set: function(config, newvalue) {
      return configuration.set(config, newvalue);
    },
    getDefault: function(config) {
      return dotProp.get(configDefault, config);
    }
  }
}

module.exports = config();
