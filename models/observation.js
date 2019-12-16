var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Schema
var schema = Schema(
  {
    name:         { type: String, required: [true, 'Título es requerido']},
    fecha:        { type: Date, default: Date.now()},
    body:         { type: String},
    image:        { type: Object}, // IMAGEN
  },
  {
    timestamps: true
  }
);

var Observation = module.exports = mongoose.model("observation", schema);
