const Product = require("../models/product");

exports.getAddPage = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add.html"));
  res.render("add", { pageTitle: "Add", path: "/admin/add" });
};

exports.postAddPage = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getShopPage = (req, res, next) => {
  Product.fetchAll((products) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};
