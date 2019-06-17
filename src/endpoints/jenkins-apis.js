const apiBase = '/api';

const jenkinsApis = ({ releaseStore, multerMiddleware, jenkinsApiMiddleware }) => 
[
  // returns recent version.
  {
    uri: `${apiBase}/recent`,
    method: 'get',
    handlers: [
      async (req, res) => {
        console.log(releaseStore);
        res.status(200).send(1);
      }
    ]
  },

  // uploads recent version
  {
    uri: `${apiBase}/upload`,
    method: 'post',
    handlers: [
      jenkinsApiMiddleware,
      multerMiddleware.single('apk_file'),
      async (req, res) => {
        // TODO: to be implemented
        res.status(200).json({});
      }
    ]
  }
];

module.exports = jenkinsApis;