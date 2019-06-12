const { initConfig } = require('./configurations');
const { initFactory } = require('./factory');

(async () => {
  initConfig(process.env);
  await initFactory();
})();