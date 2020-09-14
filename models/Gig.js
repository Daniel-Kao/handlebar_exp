const Sequelize = require("sequelize");
const db = require("../config/db/database");

const Gig = db.define("gigs", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

Gig.sync().then(() => console.log("table created"));

module.exports = Gig;
