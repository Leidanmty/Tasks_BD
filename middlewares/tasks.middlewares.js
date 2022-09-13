const { Task } = require("../models/tasks.model");

const taskExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, finishDate, limitDate } = req.body;
    const stat = "active";
    const task = await Task.findOne({ where: { id } });

    if (status !== stat) {
      task;
    } else {
      res.status(204).json({
        status: "error",
        message: "The User have status cancelled",
      });
    }

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};

const statusExist = async (req, res, next) => {
  try {
    const { status } = req.params;
    const stat = ["active", "complete", "late", "cancelled"];
    const stats = await Task.findAll({ where: { status } });

    for (const i = 0; i > stat.length; i++) {
      if (status !== stat[i]) {
        stats;
      } else {
        if (!stats) {
          return res.status(404).json({
            status: "error",
            message: "state not found",
          });
        }
      }
    }

    req.stats = stats;
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { taskExist, statusExist };
