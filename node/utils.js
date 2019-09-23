const crypto = require("crypto");

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

var Utils = {
  hashedPassword: function(password) {
    const salt = config.other.salt;

    const p1 = crypto
      .createHash("sha256")
      .update(password+salt);

    const buffer = Buffer
      .concat([
        Buffer.from(p1.digest()),
        Buffer.from(salt)]
      );

      hashPassword = buffer.toString('base64')

      return hashPassword;
  }
}

module.exports = Utils;
