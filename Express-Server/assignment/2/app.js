const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const rootDir = require("./util/path");

const aaa = require("./routes/aaa");
const bbb = require("./routes/bbb");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use(aaa);
app.use(bbb);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
