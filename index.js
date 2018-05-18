'use strict';

var interpret = require('interpret');
var liftoff = require('liftoff');
var minimist = require('minimist');

var commander = require('./lib/commander');
var title = require('./lib/cli/title');

const Liftoff = new liftoff({
  name: 'wpvizir',
  processTitle: title('wpvizir', process.argv.slice(2)),
  configName: 'vizirfile',
  extensions: interpret.jsVariants
});

var options = minimist(process.argv.slice(2));

function invoke(env) {
  if (options.version || options.version) {
    commander('version');
    process.exit(0);
  }
}

function run() {
  Liftoff.launch({
    cwd: options.cwd,
    configPath: options.vizirfile,
    completion: options.completion,
  }, invoke);
}

module.exports = run;
