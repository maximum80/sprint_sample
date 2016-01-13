'use strict';

var
  request = require('request');

function endpoint (appname, path) {
  return 'https://' + appname + '.herokuapp.com' + (path || '/');
}

function isRunning (name, path, callback) {

  var options = {
    uri: endpoint(name, path),
    method: 'GET',
    json: true
  };
  request(options, callback);
}

module.exports = {
  isRunning: isRunning,
  endpoint: endpoint
}
