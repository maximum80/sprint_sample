'use strict';

var
  assert = require('chai').assert,
  spec   = require('api-first-spec');

var API = spec.define({
  "endpoint": "/api/projects",
  "method": spec.Method.GET,
  "request": {
    "contentType": spec.ContentType.URLENCODED,
    "params": {
      "title": "string",
      "url": "string",
      "description": "string"
    },
    "rules": {
      "title": {
        "required": true
      },
      "description": {
        "required": true
      },
      "url": {
        "url": true
      }
    }
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": "any"
  }
});

describe("POST /api/projects", function () {
  var host = spec.host("localhost:3000");

  it("should succeed", function (done) {
    host.api(API).params({
      title: "project",
      url: "http://example.com",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }).success(done);
  });

});
