const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
colors.enable();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(
        `Server is listening in port ${process.env.PORT}`.blue.underline.bold
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
