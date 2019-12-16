// Import model
Observation = require("../models/observation");

exports.all = (req, res) => {
  Injury.find({ injuryId: req.params.injury_id })
    .then(observations => {
      res.status(200).json({
        status: "ok",
        injuries
      });
    })
    .catch(err => {
      if (err.name === "CastError") {
        res.status(404).json({
          status: "error",
          type: "Not found",
          message: "Lesión no existe"
        });
      }
    });
};

exports.create = (req, res) => {
  var observation = new Injury(req.body.observation);
  observation
    .save()
    .then(observation => {
      res.status(201).json({
        message: "Observation created",
        observation
      });
    })
    .catch(err => {
      if (err.name === "ValidationError") {
        res.status(422).json({
          status: "error",
          type: "ValidationError",
          error: err.errors
        });
      } else {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
    });
};

exports.view = (req, res) => {
  Observation.findById(req.params.observation_id, function(err, observation) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else {
      res.json({
        message: "Observation details",
        observation: observation
      });
    }
  });
};

exports.update = (req, res) => {
  Observation.findById(req.params.observation_id, function(err, observation) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }

    let formData = req.body.observation;

    observation.observation = formData.observation ? formData.observation : observation.observation
    observation.date = formData.date ? formData.date : observation.date




    observation.save(function(err) {
      if (err) {
        res.json({
          status: "error",
          message: err
        });
      } else {
        res.json({
          message: "Observación actualizada",
          observation: observation
        });
      }
    });
  });
};

exports.delete = (req, res) => {
  Observation.deleteOne(
    {
      _id: req.params.observation_id
    },
    function(err, observation) {
      if (err) {
        res.send(err);
      } else {
        res.json({
          status: "success",
          message: "Observación eliminada"
        });
      }
    }
  );
};
