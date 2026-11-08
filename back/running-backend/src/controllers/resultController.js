const resultService = require("../services/resultService");

// Obtener todos los resultados
const obtenerResultados = async (req, res) => {
  try {
    const resultados = await resultService.obtenerResultados();

    return res.status(200).json(resultados);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener los resultados",
      error: error.message
    });
  }
};

// Obtener un resultado por ID
const obtenerResultadoPorId = async (req, res) => {
  try {
    const resultado = await resultService.obtenerResultadoPorId(req.params.id);

    if (!resultado) {
      return res.status(404).json({
        mensaje: "Resultado no encontrado"
      });
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener el resultado",
      error: error.message
    });
  }
};

// Crear un resultado
const crearResultado = async (req, res) => {
  try {
    const nuevoResultado = await resultService.crearResultado(req.body);

    return res.status(201).json({
      mensaje: "Resultado creado correctamente",
      resultado: nuevoResultado
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al crear el resultado",
      error: error.message
    });
  }
};

// Actualizar un resultado
const actualizarResultado = async (req, res) => {
  try {
    const resultadoActualizado = await resultService.actualizarResultado(
      req.params.id,
      req.body
    );

    if (!resultadoActualizado) {
      return res.status(404).json({
        mensaje: "Resultado no encontrado"
      });
    }

    return res.status(200).json({
      mensaje: "Resultado actualizado correctamente",
      resultado: resultadoActualizado
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al actualizar el resultado",
      error: error.message
    });
  }
};

// Eliminar un resultado
const eliminarResultado = async (req, res) => {
  try {
    const resultadoEliminado = await resultService.eliminarResultado(
      req.params.id
    );

    if (!resultadoEliminado) {
      return res.status(404).json({
        mensaje: "Resultado no encontrado"
      });
    }

    return res.status(200).json({
      mensaje: "Resultado eliminado correctamente",
      resultado: resultadoEliminado
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar el resultado",
      error: error.message
    });
  }
};

module.exports = {
  obtenerResultados,
  obtenerResultadoPorId,
  crearResultado,
  actualizarResultado,
  eliminarResultado
};