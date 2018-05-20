'use strict';

var interpret = require('interpret');
var liftoff = require('liftoff');
var minimist = require('minimist');

var commander = require('./lib/commander');
var title = require('./lib/cli/title');
var didyousay = require('./lib/cli/didyousay');

const Liftoff = new liftoff({
  name: 'wpvizir',
  processTitle: title('wpvizir', process.argv.slice(2)),
  configName: 'vizirfile',
  extensions: interpret.jsVariants
});

var minimistOpts = {
  boolean: [ "version" ],
  alias: {
    "v": ["version"]
  }
};

const options = minimist(process.argv.slice(2), minimistOpts);

function invoke(env) {
  if (options._.length) {
    if (commander(options._[0], options, env)) process.exit(0);
  }

  if (!options._.length && (options.version || options.v)) {
    commander('flags/version');
    process.exit(0);
  }

  didyousay(options._);
}

function run() {
  Liftoff.launch({
    cwd: options.cwd,
    configPath: options.vizirfile,
    completion: options.completion,
  }, invoke);
}

module.exports = run;
