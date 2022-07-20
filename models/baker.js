//dependencies
const mongoose = require("mongoose");
const Bread = require("./bread.js");

const { Schema } = mongoose;

//define schema
const bakerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
    },
    startDate: { type: Date, required: true },
    bio: { type: String },
  },
  {
    toJSON: { virtuals: true },
  }
);

//virtuals
bakerSchema.virtual("breads", {
  ref: "Bread",
  localField: "_id",
  foreignField: "baker",
});

//hooks
bakerSchema.post("findOneAndDelete", function () {
  console.log(this);
});

//create model and export
const Baker = mongoose.model("Baker", bakerSchema);
module.exports = Baker;
