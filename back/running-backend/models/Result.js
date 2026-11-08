const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  tiempoOficial: {
    type: String,
    required: true
  },
  puestoGeneral: {
    type: Number,
    required: true
  },
  anioEdicion: {
    type: Number,
    required: true
  },
  categoriaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("Result", resultSchema);