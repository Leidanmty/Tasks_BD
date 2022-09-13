const dotenv = require("dotenv");

const { app } = require("./app");

// Utils
const { initModels } = require("./models/initModels");
const { db } = require("./utils/database.util");

dotenv.config({ path: "./details.env" });

const startServer = async () => {
  try {
    await db.authenticate();

    // Establish the relations between models
    initModels();

    await db.sync();

    // Set server to listen
    const PORT = 2000;

    app.listen(PORT, () => {
      console.log("Express app running!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
