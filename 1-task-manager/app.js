const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const colors = require("colors");
colors.enable();

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 5001;

app.listen(
  port,
  console.log(`Server is listening in port ${port}`.blue.underline.bold)
);
