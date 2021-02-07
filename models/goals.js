const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  // mainGoal: {
  //   type: String,
  //   required: true,
  //   dueDate: {
  //     type: Date,
  //     required: false,
  //   },
  // },
  // subTasks: {
  //   type: Array,
  //   required: false,
  //   task: {
  //     type: String,
  //     required: false,
  //   },
  //   dueDate: {
  //     type: Date,
  //     required: false,
  //   },
  // },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },

  goal: {
    type: String,
    required: true,
  },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
});

const Goal = mongoose.model("Goal", goalsSchema);

module.exports = Goal;