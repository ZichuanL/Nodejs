const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/add", productsController.getAddPage);

router.post("/add", productsController.postAddPage);

module.exports = router;
//exports.routes = router;
//exports.products = products;
