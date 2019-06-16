const releasePages = ({ releaseStore }) => 
[
  {
    uri: '/',
    method: 'get',
    handlers: [
      async (req, res) => {
        const rows = await releaseStore.fetchAllReleases();
        res.status(200).render('index', {
          releases: rows
        });
      }
    ]
  }
];

module.exports = releasePages;