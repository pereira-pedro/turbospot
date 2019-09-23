const express = require("express");

const UserController = require("../controllers/users");

const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", checkAuth, UserController.createUser);

router.post("/login", UserController.execLogin);

router.put("/:id", checkAuth, UserController.updateUser);

router.get("", checkAuth, UserController.getUsers);

router.get("/:login", checkAuth, UserController.getUserByLogin);

router.delete("/:id", checkAuth, UserController.deleteUser);

module.exports = router;
