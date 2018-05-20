'use strict';

var title = require('../../../lib/cli/title');

var expect = require('expect');

describe('lib: cli/title', function() {

  it('should concatenated command and args to create titles', function(done) {
    expect(title('cmd')).toEqual('cmd');
    expect(title('cmd', [])).toEqual('cmd');
    expect(title('cmd', [ '--version' ])).toEqual('cmd --version');
    expect(title('cmd', [ '--arg1', '--arg2' ])).toEqual('cmd --arg1 --arg2');

    done();
  });

});
