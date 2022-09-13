const { Task } = require("../models/tasks.model");

//Creating endpoints functions
const creatTask = async (req, res) => {
  try {
    const { title, userId, StartDate, limitDate } = req.body;
    const newTask = await Task.create({ title, userId, StartDate, limitDate });

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
    const { stats } = req;

    res.status(200).json({
      status: "succes",
      data: { stats },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { finishDate, limitDate } = req.body;
    const { task } = req;

    await task.update({ finishDate });

    if (finishDate !== null) {
      if (Date.parse(limitDate) < Date.parse(finishDate)) {
        await task.update({ status: "late" });
      } else {
        await task.update({ status: "complete" });
      }
    }

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

    await task.update({ status: "cancelled" });

    res.status(204).json({ status: "success" });
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
