require("dotenv").config();
require("colors");
require("express-async-errors");

// Async Errors
const express = require("express");
const app = express();
const notFoundMiddleware = require("./middleware/not-found");
const ErrorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(
    '<h1> Store API </h1> <a href="/api/v1/products"> Products Routes </a>'
  );
});

app.use("/api/v1/products", productsRouter);

// Product Route
app.use(notFoundMiddleware);
app.use(ErrorMiddleware);

const port = process.env.PORT || 5001;
const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`Server is Listening port ${port}...`.bgGreen.underline.bold)
    );
  } catch (error) {
    console.log(`${error}`.bgRed.underline.bold);
  }
};

start();
