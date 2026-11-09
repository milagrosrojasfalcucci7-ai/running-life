const mongoose = require("mongoose");

const inscriptionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  telefono: {
    type: String,
    required: true
  },
  distancia: {
    type: String,
    enum: ["21KM", "50KM"],
    required: true
  },
  experiencia: {
    type: String,
    enum: ["Principiante", "Avanzado"],
    required: true
  },
  comentario: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Inscription", inscriptionSchema);