'use strict';

var expect = require('expect');
var translater = require('../../lib/translater');

describe('translater', function() {

  it('should translater the string', function(done) {
    var translations = [
      ['Still just return strings', 'Still just return strings', 'pt_BR'],
      ['Still just return strings', 'Still just return strings', 'en'],
    ];

    for(var i = 0, length1 = translations.length; i < length1; i++){
      expect(translater(translations[i][0])).toEqual(translations[i][1]);
    }

    done(0);
  });

});
