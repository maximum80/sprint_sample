'use strict';

var
  assert = require('chai').assert,
  spec   = require('api-first-spec');

var API = spec.define({
  "endpoint": "/api/projects",
  "method": spec.Method.GET,
  "request": {
    "contentType": spec.ContentType.URLENCODED,
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": "any"
  }
});

describe("GET /api/projects", function () {
  var host = spec.host("localhost:3000");

  it("should succeed", function (done) {
    host.api(API).success(done);
  });

});
