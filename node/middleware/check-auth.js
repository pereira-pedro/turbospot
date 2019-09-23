const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, config.other.jwt_key);
    req.userData = {userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "Você não está autenticado." });
  }
};
