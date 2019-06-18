module.exports = ({ mysql }) => ({

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
    return await mysql.query(sql);
  },

  async insertNewRelease({ version, feature, file_name }) {
    const sql = `
      INSERT INTO
        dev_release
      SET
        version=?,
        feature=?,
        file_name=?,
        reg_date=NOW()
    `;
    const params = [ version, feature, file_name ];
    await mysql.query(sql, params);
  }
});