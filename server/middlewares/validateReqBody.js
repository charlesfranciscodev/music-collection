module.exports = function validateReqBody(KEYS) {
  return function (req, res, next) {
    for (let i = 0; i < KEYS.length; i++) {
      const KEY = KEYS[i];
      if (!req.body[KEY]) {
        res.status(400).json( {"message": `Missing ${KEY} in request body` });
        return;
      }
    }
    next();
  }
};
