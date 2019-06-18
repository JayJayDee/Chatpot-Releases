const apiBase = '/api';

const jenkinsApis = ({ releaseStore, multerMiddleware, jenkinsApiMiddleware }) => 
[
  // returns recent version.
  {
    uri: `${apiBase}/recent`,
    method: 'get',
    handlers: [
      async (req, res) => {
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
        if (!req.file) return res.status(400).send('FILE_REQUIRED');

        const file_name = req.file.filename;
        const version = req.body.version;
        const feature = req.body.feature;

        if (!version) return res.status(400).send('VERSION_REQUIRED');
        if (!feature) return res.status(400).send('FEATURE_REQUIRED');

        await releaseStore.insertNewRelease({
          version,
          file_name,
          feature
        });

        res.status(200).json({});
      }
    ]
  }
];

module.exports = jenkinsApis;