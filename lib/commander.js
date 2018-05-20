'use strict';

function commander(cmd, options, env) {
  try {
    require('./commands/' + cmd)(options, env);
  } catch(err) {
    return false;
  }

  return true;
}

module.exports = commander;
