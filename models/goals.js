const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  goal: {
    type: String,
    required: true,
    trim: true,
  },
});

const Goal = mongoose.model("Goal", goalsSchema);

module.exports = Goal;