var express = require("express");
var exphbs = require("express-handlebars");

require("dotenv").config({
  path: `${__dirname}/config/env/${process.env.NODE_ENV}.env`,
});

const db = require("./config/db/database");

// Test DB
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

var app = express();
// app.enable("view cache");

console.log(process.env.NAME);

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.use("/gigs", require("./routes/gig"));

app.listen(5000);
