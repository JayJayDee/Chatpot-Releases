const initMysql = require('./mysql');
const initLogger = require('./logger');
const endpoints = require('./endpoints');
const { releaseStoreMysql } = require('./release-store');

const instances = {};

const initFactory = async ({ mysqlConf, httpConf }) => {
  // initialize base dependencies.
  const log = initLogger({ level: 'DEBUG' });
  const mysql = await initMysql({ log, mysqlConf });

  // initialize dependencies for external services
  instances['releaseStore'] = releaseStoreMysql({ log , mysql });
  instances['endpoints'] = endpoints({ log, httpConf });
};

const releaseStore = () => instances['releaseStore'];
const endpointsRunner = () => instances['endpoints'];

module.exports = {
  initFactory,
  endpointsRunner,
  releaseStore
};