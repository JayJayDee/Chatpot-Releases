const initConfig = require('./configurations');
const { initFactory } = require('./factory');

(async () => {
  const { mysql, http } = initConfig(process.env);
  await initFactory({ mysql, http });

  
})();