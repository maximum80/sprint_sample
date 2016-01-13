'use strict';

var
  github = require('./github'),
  assert = require('chai').assert,
  account = require('../account.json');

describe('Verify GitHub Account', function() {
  it('should get right user', function (done) {
    github.getUser(account.github_username, function (err, resp, user) {
      assert.equal(resp.statusCode, 200);
      assert.propertyVal(user, 'login', account.github_username);
      done();
    });
  });
});
