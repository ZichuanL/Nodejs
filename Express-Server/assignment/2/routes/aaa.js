const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/a", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "aaa.html"));
});

module.exports = router;
