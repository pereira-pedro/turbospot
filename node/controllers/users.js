const jwt = require('jsonwebtoken');
const User = require("../models/user");
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];

exports.createUser = (req, res, next) => {
  User.create(req.body, function(err, rows) {
    if (err) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to add user.",
        id: -1
      });
    } else {
      res.status(200).json({
        message: "Usuário criado corretamente.",
        id: rows[0].id
      });
    }
  });
};

exports.updateUser = (req, res, next) => {
  User.update(req.body, function(err, count) {
    if (err || count <= 0) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to update user."
      });
    } else {
      res.status(200).json({
        message: "Usuário gravado corretamente."
      });
    }
  });
};

exports.getUsers = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;

  User.retrieveAll(currentPage, pageSize, function(err, rows, fields) {
    if (err) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to retrieve all users."
      });
    } else {
      res.status(200).json({
        message: "",
        data: rows
      });
    }
  });
};

exports.getUserByLogin = (req, res, next) => {
  User.retrieveByLogin(req.params.login, function(err, rows, fields) {
    if (err) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to retrieve user."
      });
    } else {
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    }
  });
};

exports.deleteUser = (req, res, next) => {
  User.delete(req.params.id, function(err, count) {
    if (err || count <= 0) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to delete user."
      });
    } else {
      res.status(200).json({
        message: "Usuário removido corretamente."
      });
    }
  });
};

exports.execLogin = (req, res, next) => {
  User.execLogin(req.body.login, req.body.password, function(err, rows) {
    if (err) {
      res.status(500).json({
        message: err.sqlMessage || "Unable to login." + err
      });
    } else {
      if( rows.length === 0 ) {
        return res.status(401).json({
          message: 'Invalid user.'
        });
      }

      const token = jwt.sign(
        { id: rows[0].id, fullname: rows[0].fullname, login: rows[0].login },
        config.other.jwt_key,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token,
        expiresIn: 3600,
        id: rows[0].id,
        fullname: rows[0].fullname,
        login: rows[0].login
      });
    }
  });
};
