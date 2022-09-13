//Models
const { User } = require("./users.model");
const { Task } = require("./tasks.model");

const initModels = () => {
  //1 User < --- > M Tasks
  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User);

  //M Tasks < --- > 1 User
  Task.belongsToMany(User, {
    through: "id",
    sourceKey: "id",
  });
  User.hasMany(Task);
};

module.exports = { initModels };
