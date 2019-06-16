const releasePages = ({ releaseStore }) => 
[
  {
    uri: '/',
    method: 'get',
    handlers: [
      async (req, res) => {
        const rows = await releaseStore.fetchAllReleases();
        console.log(rows);
        res.status(200).json({});
      }
    ]
  }
];

module.exports = releasePages;