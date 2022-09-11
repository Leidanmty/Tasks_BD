const express = require("express");
//const {} = require("express-validator");

//Controllers
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

//Middlewares
const { userExist } = require("../middlewares/users.middlerwares");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");

//Routes
const usersRoutes = express.Router();

usersRoutes.post("/", createUserValidators, createUser);

usersRoutes.get("/", getAllUsers);

usersRoutes.patch("/:id", userExist, updateUser);

usersRoutes.delete("/:id", userExist, deleteUser);

module.exports = { usersRoutes };
