module.exports = ({ log, mysql }) => ({

  async fetchAllReleases() {
    const sql = `
      SELECT 
        no,
        version,
        feature,
        file_name,
        reg_date
      FROM
        dev_release
      ORDER BY
        no DESC
    `;
    log.debug('test');
    return await mysql.query(sql);
  }
});