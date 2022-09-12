const express = require("express");

//Controllers
const {} = require("../controllers/tasks.controller");

//Middleware
const {} = require("../middlewares/tasks.middlewares");

//Routes
const tasksRoutes = express.Router();

module.exports = { tasksRoutes };
