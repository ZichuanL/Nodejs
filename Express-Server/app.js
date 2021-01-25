const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add", (req, res, next) => {
  console.log("add runs");
  res.send("<h1>Adding something!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("Root page");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
