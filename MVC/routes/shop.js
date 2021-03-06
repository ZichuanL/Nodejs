const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();
const adminData = require("./admin");

router.get("/", productsController.getShopPage);

module.exports = router;
