const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const users = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "aaa" });
});

app.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "User",
    users: users,
  });
});

app.post("/add", (req, res, next) => {
  users.push({ name: req.body.name });
  console.log(users);
  res.redirect("/users");
});

app.listen(3000);
