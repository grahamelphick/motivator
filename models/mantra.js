const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mantraSchema = new Schema({
  mantra: {
    type: String,
    required: true,
    trim: true,
  },
});

const Mantra = mongoose.model("Mantra", mantraSchema);

module.exports = Mantra;