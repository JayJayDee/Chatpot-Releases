const initConfig = require('./configurations');
const { initFactory, endpointsRunner } = require('./factory');

(async () => {
  const { mysqlConf, httpConf, authConf } = initConfig(process.env);
  await initFactory({ mysqlConf, httpConf, authConf });

  const runEndpoints = endpointsRunner();
  runEndpoints();
})();