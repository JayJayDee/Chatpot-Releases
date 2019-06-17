const initMysql = require('./mysql');
const initLogger = require('./logger');
const createRunner = require('./endpoints-runner');
const { createReleasePages, createJenkinsApis } = require('./endpoints');
const { createMulterMiddleware, createJenkinsApiMiddleware } = require('./middlewares');
const { releaseStoreMysql } = require('./release-store');

const instances = {};

const initFactory = async ({ mysqlConf, httpConf, authConf }) => {
  // initialize base dependencies.
  const log = initLogger({ level: 'DEBUG' });
  const mysql = await initMysql({ log, mysqlConf });

  // initialize dependencies for external services
  const releaseStore = releaseStoreMysql({ log , mysql });

  // initialize middlewares
  const multerMiddleware = createMulterMiddleware({ httpConf });
  const jenkinsApiMiddleware = createJenkinsApiMiddleware({ authConf });

  // initialize endpoints
  const releasePages = createReleasePages({ releaseStore });
  const jenkinsApis = createJenkinsApis({ releaseStore, multerMiddleware, jenkinsApiMiddleware });

  // merge all endpoints to one array
  const endpoints = [
    ...releasePages,
    ...jenkinsApis
  ];

  // initialize endpoints-runner
  const runner = createRunner({ log, httpConf, endpoints });

  // initialize outsize-factory variables
  instances['runner'] = runner;
};

const endpointsRunner = () => instances['runner'];

module.exports = {
  initFactory,
  endpointsRunner
};