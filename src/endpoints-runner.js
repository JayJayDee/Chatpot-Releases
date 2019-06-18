const express = require('express');
const { join } = require('path');

const tag = '[endpoint-runner]';

const endpoints =
  ({ log, httpConf, endpoints }) => {
    log.debug(`${tag} endpoint dependencies injected`);
    return () => {
      const app = express();
      app.set('view engine', 'ejs');
      app.set('views', join(__dirname, '/views'));
      app.use('/assets', express.static(join(__dirname, '..', 'assets')));
      app.use('/apks', express.static(httpConf.uploadPath));

      endpoints.forEach((e) => {
        if (e.method === 'get') app.get(e.uri, e.handlers);
        else if (e.method === 'post') app.post(e.uri, e.handlers);
        log.info(`${tag} endpoint reigstered: ${e.method} ${e.uri}`);
      });

      app.listen(httpConf.port);
      log.info(`${tag} http server started with port:${httpConf.port}`);
    };
  };

module.exports = endpoints;