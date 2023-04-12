const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
colors.enable();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT || 5001,
      console.log(
        `Server is listening in port ${process.env.PORT}`.blue.underline.bold
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
