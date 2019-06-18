module.exports = ({ mysql, httpConf }) => ({

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
    const rows = await mysql.query(sql);
    const converted = rows.map((r) => ({
      no: r.no,
      version: r.version,
      feature: r.feature,
      file_name: r.file_name,
      download_url: `${httpConf.publicHost}/apks/${r.file_name}`,
      reg_date: r.reg_date
    }));
    return converted;
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