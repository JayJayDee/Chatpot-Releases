const index = {
  uri: '/',
  method: 'get',
  handlers: [
    (req, res) => {
      console.log(req.url);
      res.status(200).json({});
    }
  ]
}

module.exports = { index };