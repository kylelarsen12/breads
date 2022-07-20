//Dependencies
const mongoose = require("mongoose");
const Baker = require("./baker.js");
//schema constructor
const { Schema } = mongoose;

//bread schema blueprint
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: {
    type: String,
    default: "/images/sometypeofway.jpg",
  },
  baker: {
    type: mongoose.Schema.ObjectId,
    //prettier-ignore
    ref: 'Baker',
  },
});

//Helper methods
breadSchema.methods.getBakedBy = function () {
  console.log(this.baker.name);
  //prettier-ignore
  return `${this.name} was baked with pure hatred by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`;
};

/*
breadSchema.static.findByBaker = function () {
  return this.find({ baker: "Ross" });
};*/

//Create bread model
const Bread = mongoose.model("Bread", breadSchema);

//Export model
module.exports = Bread;
