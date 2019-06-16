const apiBase = '/api';

const jenkinsApis = ({ releaseStore }) => 
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
  }
];

module.exports = jenkinsApis;