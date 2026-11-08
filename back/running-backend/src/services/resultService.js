const Result = require("../../models/Result");
const User = require("../../models/User");

// Obtener todos los resultados
// Obtener todos los resultados
const obtenerResultados = async () => {
  return await Result.find()
    .populate("categoriaId")
    .populate("usuarioId", "-password");
};

// Obtener un resultado por ID
const obtenerResultadoPorId = async (id) => {
  return await Result.findById(id)
    .populate("categoriaId")
    .populate("usuarioId", "-password");
};

// Crear un resultado
const crearResultado = async (datosResultado) => {
  const nuevoResultado = new Result(datosResultado);
  return await nuevoResultado.save();
};

// Actualizar un resultado
const actualizarResultado = async (id, datosResultado) => {
  return await Result.findByIdAndUpdate(
    id,
    datosResultado,
    { new: true, runValidators: true }
  );
};

// Eliminar un resultado
const eliminarResultado = async (id) => {
  return await Result.findByIdAndDelete(id);
};

module.exports = {
  obtenerResultados,
  obtenerResultadoPorId,
  crearResultado,
  actualizarResultado,
  eliminarResultado
}