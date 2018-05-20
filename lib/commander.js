'use strict';

function commander(cmd, env) {
  try {
    var command = require('./commands/' + cmd);
    return command(env);
  } catch(err) { }

  return false;
}

module.exports = commander;
