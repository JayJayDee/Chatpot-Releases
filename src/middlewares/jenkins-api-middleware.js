const jenkinsApiMiddleware = ({ authConf }) =>
  (req, res, next) => {
    console.log(authConf);
    next();
  };

module.exports = jenkinsApiMiddleware;