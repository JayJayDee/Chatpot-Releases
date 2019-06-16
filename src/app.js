const initConfig = require('./configurations');
const { initFactory, endpointsRunner } = require('./factory');

(async () => {
  const { mysqlConf, httpConf } = initConfig(process.env);
  await initFactory({ mysqlConf, httpConf });

  const runEndpoints = endpointsRunner();
  runEndpoints();
})();