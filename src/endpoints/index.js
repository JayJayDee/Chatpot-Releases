const { index } = require('./release-pages');
const express = require('express');

const tag = '[endpoint-runner]';

const endpoints = ({ log, httpConf }) => 
  () => {
    const app = express();
    const endpoints = [ index ];

    endpoints.forEach((e) => {
      if (e.method === 'get') app.get(e.uri, e.handlers);
      else if (e.method === 'post') app.post(e.uri, e.handlers);
      log.info(`${tag} endpoint reigstered: ${e.method} ${e.uri}`);
    });

    app.listen(httpConf.port);
    log.info(`${tag} http server started with port:${httpConf.port}`);
  };

module.exports = endpoints;