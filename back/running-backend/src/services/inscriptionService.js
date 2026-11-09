const Inscription = require("../../models/Inscription");

// Crear una inscripción
const crearInscripcion = async (datosInscripcion) => {
  const nuevaInscripcion = new Inscription(datosInscripcion);

  return await nuevaInscripcion.save();
};

// Obtener todas las inscripciones
const obtenerInscripciones = async () => {
  return await Inscription.find();
};

// Obtener una inscripción por ID
const obtenerInscripcionPorId = async (id) => {
  return await Inscription.findById(id);
};

// Eliminar una inscripción
const eliminarInscripcion = async (id) => {
  return await Inscription.findByIdAndDelete(id);
};

// Actualizar una inscripción
const actualizarInscripcion = async (id, datosActualizados) => {
  return await Inscription.findByIdAndUpdate(
    id,
    datosActualizados,
    {
      new: true,
      runValidators: true
    }
  );
};
module.exports = {
  crearInscripcion,
  obtenerInscripciones,
  obtenerInscripcionPorId,
  eliminarInscripcion,
  actualizarInscripcion
};