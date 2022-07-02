//Require modules
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to an awesome app about bread");
});

//Breads
const breadsController = require("./controllers/breads_controllers.js");
app.use("/breads", breadsController);

//Listen
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
