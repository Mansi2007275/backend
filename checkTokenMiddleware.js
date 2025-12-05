let myToken = 12345;
let checkToken = (req, res, next) => {
  if (req.headers.token != myToken) {
    return res
      .status(401)
      .send({ status: 0, msg: "Unauthorized , invalid token" });
  }
  if (req.queary.token != myToken) {
    return res
      .status(401)
      .send({ status: 0, msg: "Unauthorized , invalid token in query" });
  }
  next();
};
module.exports = { checkToken };
