const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalsSchema = new Schema({
    journalTitle: {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
});

const Journal = mongoose.model("Journal", journalsSchema);

module.exports = Journal;