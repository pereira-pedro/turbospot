const mysql = require("mysql2");
const fs = require("fs");
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

var connection = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
  port: config.database.port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
  ssl: {
    ca: fs.readFileSync(config.database.ca_file),
    key: fs.readFileSync(config.database.key_file),
    cert: fs.readFileSync(config.database.cert_file)
  }
});

module.exports = connection;
