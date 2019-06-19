const releasePages = ({ releaseStore }) => 
[
  {
    uri: '/',
    method: 'get',
    handlers: [
      async (req, res) => {
        const releases = await releaseStore.fetchAllReleases();
        const current = 'index';
        res.status(200).render('index', { releases, current });
      }
    ]
  },

  {
    uri: '/developer',
    method: 'get',
    handlers: [
      async (req, res) => {
        const current = 'developer';
        res.status(200).render('developer', { current });
      }
    ]
  },

  {
    uri: '/webapp',
    method: 'get',
    handlers: [
      async (req, res) => {
        const current = 'webapp';
        res.status(200).render('webapp', { current });
      }
    ]
  },

  {
    uri: '/privacy-policy',
    method: 'get',
    handlers: [
      async (req, res) => {
        const current = '';
        res.status(200).render('privacy-policy', { current });
      }
    ]
  }
];

module.exports = releasePages;