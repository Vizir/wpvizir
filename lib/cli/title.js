'use strict';

function title(cmd, argv) {
  if (!argv || !argv.length) return cmd;

  return [cmd].concat(argv).join(' ');
}

module.exports = title;
