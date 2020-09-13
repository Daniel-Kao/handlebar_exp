var express = require("express");
var exphbs = require("express-handlebars");

require("dotenv").config({
  path: `${__dirname}/config/${process.env.NODE_ENV}.env`,
});

var app = express();
app.enable("view cache");

console.log(process.env.NAME);

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000);
