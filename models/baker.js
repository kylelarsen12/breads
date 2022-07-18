//dependencies
const mongoose = require("mongoose");

const { Schema } = mongoose;

//define schema
const bakerSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
  },
  startDate: { type: Date, required: true },
  bio: { type: String },
});

//create model and export
const Baker = mongoose.model("Baker", bakerSchema);
module.exports = Baker;
