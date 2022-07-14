//Require dependencies
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//MongoDB Integration
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

//MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to an awesome app about bread");
});

//Breads
const breadsController = require("./controllers/breads_controllers.js");
app.use("/breads", breadsController);

//404
app.get("*", (req, res) => {
  res.render("error404");
});

//Listen
app.listen(PORT, () => {
  console.log("nomming at port", PORT);
});
