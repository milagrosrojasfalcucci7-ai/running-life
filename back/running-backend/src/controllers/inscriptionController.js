const inscriptionService = require("../services/inscriptionService");

// Crear una inscripción
const crearInscripcion = async (req, res) => {
  try {
    const nuevaInscripcion = await inscriptionService.crearInscripcion(
      req.body
    );

    return res.status(201).json({
      mensaje: "Inscripción guardada correctamente",
      inscripcion: nuevaInscripcion
    });

  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al guardar la inscripción",
      error: error.message
    });
  }
};

// Obtener todas las inscripciones
const obtenerInscripciones = async (req, res) => {
  try {
    const inscripciones = await inscriptionService.obtenerInscripciones();

    return res.status(200).json(inscripciones);

  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener las inscripciones",
      error: error.message
    });
  }
};

// Obtener una inscripción por ID
const obtenerInscripcionPorId = async (req, res) => {
  try {
    const inscripcion = await inscriptionService.obtenerInscripcionPorId(
      req.params.id
    );

    if (!inscripcion) {
      return res.status(404).json({
        mensaje: "Inscripción no encontrada"
      });
    }

    return res.status(200).json(inscripcion);

  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al buscar la inscripción",
      error: error.message
    });
  }
};

// Eliminar una inscripción
const eliminarInscripcion = async (req, res) => {
  try {
    const inscripcion = await inscriptionService.eliminarInscripcion(
      req.params.id
    );

    if (!inscripcion) {
      return res.status(404).json({
        mensaje: "Inscripción no encontrada"
      });
    }

    return res.status(200).json({
      mensaje: "Inscripción eliminada correctamente"
    });

  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al eliminar la inscripción",
      error: error.message
    });
  }
};

// Actualizar una inscripción
const actualizarInscripcion = async (req, res) => {
  try {
    const inscripcionActualizada =
      await inscriptionService.actualizarInscripcion(
        req.params.id,
        req.body
      );

    if (!inscripcionActualizada) {
      return res.status(404).json({
        mensaje: "Inscripción no encontrada"
      });
    }

    return res.status(200).json({
      mensaje: "Inscripción actualizada correctamente",
      inscripcion: inscripcionActualizada
    });

  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al actualizar la inscripción",
      error: error.message
    });
  }
};

module.exports = {
  crearInscripcion,
  obtenerInscripciones,
  obtenerInscripcionPorId,
  eliminarInscripcion,
  actualizarInscripcion
};