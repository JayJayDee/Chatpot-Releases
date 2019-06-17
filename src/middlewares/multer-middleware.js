const multer = require('multer');

const multerMiddleware = ({ httpConf }) =>
  multer({ dest: httpConf.fileUploadPath });

module.exports = multerMiddleware;