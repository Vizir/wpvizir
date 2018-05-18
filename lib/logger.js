'use strict';

const chalk = require('chalk');

function Logger(text) {
  return {
    info: function(text) {
      return console.log(chalk.white(text));
    }
  }
}

module.exports = Logger();
