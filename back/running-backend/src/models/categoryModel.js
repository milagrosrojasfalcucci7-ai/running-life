
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  distancia: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Category", categorySchema);
