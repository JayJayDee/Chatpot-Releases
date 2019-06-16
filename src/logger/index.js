const initLogger = ({ logConf }) =>
  ({
    info(payload) {
      console.log(payload);
    },
    debug(payload) {
      console.log(payload);
    },
    error(payload) {
      console.log(logConf);
      console.log(payload);
    }
  });

module.exports = initLogger;