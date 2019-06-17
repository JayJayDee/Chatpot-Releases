const releasePages = ({ releaseStore }) => 
[
  {
    uri: '/',
    method: 'get',
    handlers: [
      async (req, res) => {
        const releases = await releaseStore.fetchAllReleases();
        res.status(200).render('index', { releases });
      }
    ]
  }
];

module.exports = releasePages;