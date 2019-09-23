const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-TYpe, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/users', userRoutes);

module.exports = app;

/*
app.use("/api/users", (req, res, next) => {
  const users = [
    {
      id: 10,
      fullname: "Pedro Bastos",
      login: "pbastos",
      type: "admin"
    }
  ];
  res.status(200).json({
    status: "OK",
    message: "",
    data: users
  });
});

module.exports = app;*/
