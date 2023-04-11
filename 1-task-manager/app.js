const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const colors = require("colors");
colors.enable();
const tasks = require("./routes/task");

// Middleware
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = process.env.PORT;

app.listen(
  port,
  console.log(`Server is listening in port ${port}`.blue.underline.bold)
);
