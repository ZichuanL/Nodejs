const products = [];

exports.getAddPage = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add.html"));
  res.render("add", { pageTitle: "Add", path: "/admin/add" });
};

exports.postAddPage = (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
};

exports.getShopPage = (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};

exports.products = products;
