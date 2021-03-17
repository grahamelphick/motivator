const db = require("../models");

module.exports = {
  update: function (req, res) {
    console.log("got to controller")
    db.Mantra
      .updateOne({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Mantra
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  
  },
  find: function (req, res) {
    db.Mantra
      .find(req.query)
      .limit(1)
      .sort({ $natural: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
