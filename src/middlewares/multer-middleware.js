const multer = require('multer');

const multerMiddleware = ({ httpConf }) =>
  multer({ storage: createStorage(httpConf.uploadPath) });

const createStorage = (uploadPath) =>
  multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadPath),
    filename: (req, file, cb) => cb(null, `app-debug-${Date.now()}.apk`)
  });

module.exports = multerMiddleware;