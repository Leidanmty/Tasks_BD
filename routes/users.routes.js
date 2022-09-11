const express = require("express");
const {} = require("express-validator");

//Controllers
const {} = require("../controllers/users.controller");

//Middlewares
const {} = require("../middlewares/users.middlerwares");
const {} = require("../middlewares/validator.middlewares");

//Routes
const usersRoutes = express.Router();

module.exports = { usersRoutes };
