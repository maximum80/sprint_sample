'use strict';

var
  request = require('request');

function endpoint (path) {
  return 'https://api.github.com' + path;
}

function getUser (username, callback) {
  var options = {
    uri: endpoint('/users/' + username),
    method: 'GET',
    json: true,
    headers: {
      'User-Agent': 'GitHub Account Challenge',
    }
  };
  request(options, callback);
};

module.exports = {
  getUser: getUser,
}
