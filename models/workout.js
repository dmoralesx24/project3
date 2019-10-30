const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: String,
  link: String,
  muscle: String,
  equipment: String,
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note" 
  }
});

const Workout = mongoose.model("Workout",workoutSchema);

module.exports = Workout;