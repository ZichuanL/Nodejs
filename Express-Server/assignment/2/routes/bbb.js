const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/b", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "bbb.html"));
});

module.exports = router;
