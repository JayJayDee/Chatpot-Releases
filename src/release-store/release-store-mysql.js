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
  }
});