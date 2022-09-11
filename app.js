const express = require("express");

//Routers
const { usersRoutes } = require("./routes/users.routes");

//Init our Express app
const app = express();

//Enable Express app to receive JSON data
app.use(express.json());

//Define Endpoints
app.use("/api/v1/users", usersRoutes);

//Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
