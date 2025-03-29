const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);