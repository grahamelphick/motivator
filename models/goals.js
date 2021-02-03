const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  mainGoal: {
    type: String,
    required: true,
  },
  subTasks: {
    type: Array,
    required: false,
    task: {
      type: String,
      required: false,
    },
    dueDate: {
      type: Date,
      required: false,
    },
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Goal = mongoose.model("Goal", goalsSchema);

module.exports = Goal;