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
  },

  {
    uri: '/developer',
    method: 'get',
    handlers: [
      async (req, res) => {
        res.status(200).render('developer');
      }
    ]
  }
];

module.exports = releasePages;