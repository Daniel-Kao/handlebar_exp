const express = require("express");
const router = express.Router();

const Gig = require("../models/Gig");

router.get("/", (req, res) => {
  Gig.findAll()
    .then((gigs) => {
      //   console.log(gigs[0].dataValues);

      res.render("home", { gigs });
    })
    .catch((err) => console.log("error" + err));
});

module.exports = router;
