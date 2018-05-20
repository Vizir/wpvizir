'use strict';

var interpret = require('interpret');
var liftoff = require('liftoff');
var minimist = require('minimist');


var commander = require('./lib/commander');
var didyousay = require('./lib/cli/didyousay');
var helper = require('./lib/cli/helper');
var title = require('./lib/cli/title');

const Liftoff = new liftoff({
  name: 'wpvizir',
  processTitle: title('wpvizir', process.argv.slice(2)),
  configName: 'vizirfile',
  extensions: interpret.jsVariants
});

var minimistOpts = {
  boolean: [ 'version', 'global' ],
  string: [ 'set', 'get' ],
  alias: {
    "v": [ 'version' ],
    "g": [ 'global' ]
  }
};

const options = minimist(process.argv.slice(2), minimistOpts);

function invoke(env) {
  if (options._.length) {
    if (commander(options._[0], options, env)) return;
  }

  if (!options._.length && (options.version || options.v)) {
    commander('flags/version');
    return;
  }

  if (didyousay(options._)) return;

  helper('wpvizir');
}

function run() {
  Liftoff.launch({
    cwd: options.cwd,
    configPath: options.vizirfile,
    completion: options.completion,
  }, invoke);
}

module.exports = run;
