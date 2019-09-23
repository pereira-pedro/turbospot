const conn = require("../dbconnection");
const utils = require("../utils");

var User = {
  create: function(User, callback) {
    const hashPassword = utils.hashedPassword(password);
      return conn.query(
      "CALL sp_create_user(?,?,?,?,@id); SELECT @id AS id",
      [User.fullname, User.login, hashPassword, User.type],
      callback
    );
  },
  retrieve: function(id, callback) {
    return conn.query(
      "SELECT id, fullname, login, type FROM user WHERE id=?",
      [id],
      callback
    );
  },
  update: function(User, callback) {
    const hashPassword = utils.hashedPassword(User.password);

    return conn.query(
      "CALL sp_update_user(?,?,?,?,?)",
      [User.id, User.fullname, User.login, User.type, hashPassword],
      callback
    );
  },
  delete: function(id, callback) {
    return conn.query("CALL sp_delete_user(?)", [id], callback);
  },
  retrieveAll: function(page, pageSize, callback) {
    return conn.query(
      "SELECT id, fullname, login, type FROM user LIMIT ?,?",
      [page - 1, page * pageSize],
      callback
    );
  },
  retrieveByLogin: function(login, callback) {
    return conn.query(
      "SELECT id, fullname, login, type FROM user WHERE login=?",
      [login],
      callback
    );
  },
  execLogin: function(login, password, callback) {

    const hashPassword = utils.hashedPassword(password);

    return conn.query(
      "SELECT id, fullname, login FROM user WHERE type = 'admin' AND login=? AND password = ?",
      [login, hashPassword],
      callback
    );
  }
};

module.exports = User;
