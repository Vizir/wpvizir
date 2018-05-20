'use strict';

var configurator = require('./configurator');

var locale = configurator.get('locale');
var localeJson = {};

try {
  localeJson = require('../locales/' + locale + '.json');
} catch(e) {
  localeJson = {};
}

const translations = localeJson;

function doTranslation(string) {
  for (var original in translations) {
    if (string === original) return translations[original];
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
