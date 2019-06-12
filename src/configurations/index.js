const { config } = require('dotenv');

class ConfigurationError extends Error {}

const initConfig = (source) => {
  const path = source.CONFIG_PATH;
  if (path) {
    const result = config({ path });
    if (result.error) {
      throw new ConfigurationError(`the config path: ${path} was invalid.`);
    }
  }
};

const valueReader = (source) =>
  (key, param) => {
    if (param && param.required === true) {
      if (source[key] === undefined || source[key] === null) {
        throw new ConfigurationError(`configuration attribute: ${key} required`);
      }
    }
    return source[key];
  };


const mysqlConfig = (source) => {
  const read = valueReader(source);
  const required = true;
  return () => ({
    host: read('MYSQL_HOST', { required }),
    port: read('MYSQL_PORT', { required }),
    user: read('MYSQL_USER', { required }),
    password: read('MYSQL_PASSWORD', { required }),
    database: read('MYSQL_DATABASE', { required }),
    connectionLimit: read('MYSQL_CONNECTION_LIMIT', { required })
  });
};

const httpConfig = (source) => {
  const read = valueReader(source);
  const required = true;
  return {
    host: read('HTTP_PORT', { required })
  };
};

module.exports = { initConfig, mysqlConfig, httpConfig };