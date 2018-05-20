'use strict';

var configurator = require('./configurator');
var locales = []; // Cache locales

function getTranslations(locale) {
  for (var i = 0; i < locales.length; i++) {
    if (locales[i].locale == locale) return locales[i].translations;
  }

  var translations;

  try {
    translations = require('../locales/' + locale + '.json');
  } catch(e) {
    translations = {};
  }

  locale = {
    locale: locale,
    translations: translations
  };

  locales.push(locale);

  return locale.translations;
}

function doTranslation(string) {
  var locale = configurator.get('locale');
  var translations = getTranslations(locale);

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
