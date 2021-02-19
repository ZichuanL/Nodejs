const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

const products = ["1"];

router.get("/add", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add.html"));
});

router.post("/add", (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
