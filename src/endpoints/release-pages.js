const index = {
  uri: '/',
  method: 'get',
  handlers: [
    (req, res) => {
      console.log(req.uri);
      res.status(200).json({});
    }
  ]
}

module.exports = { index };