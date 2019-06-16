const initMysql = require('./mysql');
const initLogger = require('./logger');
const createRunner = require('./endpoints-runner');
const { createReleasePages } = require('./endpoints');
const { releaseStoreMysql } = require('./release-store');

const instances = {};

const initFactory = async ({ mysqlConf, httpConf }) => {
  // initialize base dependencies.
  const log = initLogger({ level: 'DEBUG' });
  const mysql = await initMysql({ log, mysqlConf });

  // initialize dependencies for external services
  const releaseStore = releaseStoreMysql({ log , mysql });

  // initialize endpoints
  const releasePages = createReleasePages({ releaseStore });
  const endpoints = [
    ...releasePages
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