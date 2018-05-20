'use strict';

const chalk = require('chalk');

function Logger(text) {
  function addlines(text) {
    return "\n" + text + "\n";
  }

  return {
    info: function(text) {
      return console.log(addlines(chalk.white(text)));
    }
  }
}

module.exports = Logger();
