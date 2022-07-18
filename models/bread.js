//Dependencies
const mongoose = require("mongoose");
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
    type: Schema.Types.ObjectID,
    ref: "Baker",
  },
});

//Helper methods
breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with pure hatred by ${this.baker}`;
};

breadSchema.static.findByBaker = function () {
  return this.find({ baker: "Ross" });
};
//Create bread model
const Bread = mongoose.model("Bread", breadSchema);

//Export model
module.exports = Bread;
