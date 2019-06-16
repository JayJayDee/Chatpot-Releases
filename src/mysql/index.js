const { createPool } = require('mysql2/promise');

const tag = '[mysql]';

module.exports = async ({ log, mysqlConf }) => {
  log.info(`${tag} initializing mysql driver.. host: ${mysqlConf.host}`);
  const pool = createPool(mysqlConf);
  await inspectConnection(pool);
  log.info(`${tag} mysql connection established`);
  return helper(pool);
};

const inspectConnection = async (pool) => {
  let connection = null;
  try {
    connection = await pool.getConnection();
    await connection.query('SELECT 1');
  } finally {
    connection.release();
  }
};

const helper = (pool) => ({
  async query(sql, params) {
    let connection = null;
    try {
      connection = await pool.getConnection();
      return await connection.query(sql, params);
    } finally {
      connection.release();
    }
  }
});