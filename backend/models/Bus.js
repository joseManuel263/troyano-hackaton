const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  type: { type: String, default: "Point" },
  coordinates: { type: [Number], required: true } // [longitud, latitud]
});

const BusSchema = new mongoose.Schema({
  plate: { type: String, unique: true, required: true },
  route: String,
  lastPosition: { type: PointSchema, index: "2dsphere" },
  reports: [{ type: String, enum: ["trafico", "accidente", "retraso"] }]
});

module.exports = mongoose.model("Bus", BusSchema);