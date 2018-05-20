'use strict';

// TODO: locales as config
var locales = require('../locales/pt_BR.json');

function doTranslation(string) {
  for (var original in locales) {
    if (string === original) return locales[original];
  }

  return string;
}

function translater(string, replace) {
  var translation = doTranslation(string);

  if (typeof replace == 'string') {
    return translation.replace('%s', replace);
  }

  if (typeof replace == 'object') {
    for (var value in replace) {
      translation = translation.replace('{' + value + '}', replace[value]);
    }

    return translation;
  }

  return translation;
}

module.exports = translater;
