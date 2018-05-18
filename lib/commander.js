'use strict';

function commander(cmd, env) {
  return require('./commands/' + cmd)(env);
}

module.exports = commander;
