const path = require("path");

const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

router.use("/add", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
