const initMysql = require('./mysql');
const initLogger = require('./logger');
const endpoints = require('./endpoints');

const instances = {};

const initFactory = async ({ mysqlConf, httpConf }) => {
  // initialize base dependencies.
  const log = initLogger({ level: 'DEBUG' });
  const mysql = await initMysql({ log, mysqlConf });
  console.log(mysql);

  // initialize dependencies for external services
  instances['endpoints'] = endpoints({ log, httpConf });
};

const runEndpoints = instances['endpoints'];

module.exports = { initFactory, runEndpoints };