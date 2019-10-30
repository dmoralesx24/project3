const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  title: String,
  link: String,
  muscle: String,
  equipment: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
