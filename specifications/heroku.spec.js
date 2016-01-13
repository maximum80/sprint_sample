'use strict';

var
  heroku = require('./heroku'),
  assert = require('chai').assert,
  account = require('../account.json');

describe('Verify Heroku Application', function() {
  it('should hosted', function (done) {
    heroku.isRunning(account.heroku_appname, '/api/ping', function (err, resp, body) {
      assert.equal(resp.statusCode, 200);
      assert.equal(body, "PONG");
      done();
    });
  });
});
