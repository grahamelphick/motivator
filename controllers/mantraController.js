const db = require("../models");

// module.exports = {
//   update: function (req, res) {
//     console.log("got to controller")
//     db.Mantra
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };

module.exports = {
  update: function (req, res) {
    console.log("got to controller")
    db.Mantra
      .updateOne({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
