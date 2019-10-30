const db = require("../models");

module.exports = {
  findAll: function(req, res) {

    db.Workout.find(req.query)
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workout.findOne({ _id: req.params.id }).populate("note")
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workout.create(req.body)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workout.findById({ _id: req.params.id })
      .then(dbWorkout => dbWorkout.remove())
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
};
