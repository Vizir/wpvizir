'use strict';

function commander(cmd, env) {
  try {
    require('./commands/' + cmd)(env);
  } catch(err) {
    return false;
  }

  return true;
}

module.exports = commander;
