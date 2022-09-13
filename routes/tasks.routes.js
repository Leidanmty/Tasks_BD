const express = require("express");

//Controllers
const {
  creatTask,
  getAllTask,
  getTasksByStatus,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

//Middleware
const { taskExist, statusExist } = require("../middlewares/tasks.middlewares");

//Routes
const tasksRoutes = express.Router();

tasksRoutes.post("/", creatTask);

tasksRoutes.get("/", getAllTask);

tasksRoutes.get("/:status", statusExist, getTasksByStatus);

tasksRoutes.patch("/:id", taskExist, updateTask);

tasksRoutes.delete("/:id", taskExist, deleteTask);

module.exports = { tasksRoutes };
