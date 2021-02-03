const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/goals"
);

const goalSeed = [
  {
    mainGoal: "Learn Italian",
    subTasks: [
      {
        task: "Learn five words",
        dueDate: "010121",
      },
      {
        task: "Say 'My name is Graham'",
        dueDate: "020221",
      },
      {
        task: "Say 'I am 23 years old'",
        dueDate: "030321",
      },
    ]
  }
];

db.Goal
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
