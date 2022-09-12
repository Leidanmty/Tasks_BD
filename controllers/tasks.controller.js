const { Task } = require("../models/tasks.model");

//Creating endpoints functions
const creatTask = async (req, res) => {
  try {
    const { title, userId, startDate, limitDate } = req.body;
    const newTask = await Task.create({ title, userId, startDate, limitDate });

    res.status(201).json({
      status: "succes",
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();

    res.status(200).json({
      status: "succes",
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTasksByStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const taskStatus = await Task.findAll({
      where: { status },
    });

    res.status(200).json({
      status: "succes",
      data: { taskStatus },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, finishDate } = req.body;
    const { task } = req;

    await task.update({ title, finishDate });
    await task.update({ status: cancelled });

    res.status(200).json({
      status: "Succes",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { task } = req;

    await task.update({ status: cancelled });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  creatTask,
  getAllTask,
  getTasksByStatus,
  updateTask,
  deleteTask,
};
