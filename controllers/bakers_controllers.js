//Dependenices
const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker.js");
const bakerSeedData = require("../models/baker_seed.js");

//Create seed route
baker.get("/data/seed", (req, res) => {
  Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

//GET index
baker.get("/", (req, res) => {
  Baker.find()
    .populate("breads")
    .then((foundBakers) => {
      res.send(foundBakers);
    });
});

//GET show
baker.get("/:id", (req, res) => {
  Baker.findById(req.params.id)
    .populate({ path: "breads", options: { limit: 5 } })
    .then((foundBaker) => {
      res.render("bakerShow", { baker: foundBaker });
    });
});

//DELETE
baker.delete("/:id", (req, res) => {
  Baker.findByIdAndDelete(req.params.id).then((deletedBaker) => {
    console.log(deletedBaker);
    res.status(303).redirect("/breads");
  });
});

//export
module.exports = baker;
