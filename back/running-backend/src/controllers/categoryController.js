
const categoryService = require("../services/categoryService");

// Obtener todas las categorías
const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await categoryService.obtenerCategorias();

    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener las categorías",
      error: error.message
    });
  }
};

// Crear una categoría
const crearCategoria = async (req, res) => {
  try {
    const nuevaCategoria = await categoryService.crearCategoria(req.body);

    return res.status(201).json({
      mensaje: "Categoría creada correctamente",
      categoria: nuevaCategoria
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al crear la categoría",
      error: error.message
    });
  }
};

// Actualizar una categoría
const actualizarCategoria = async (req, res) => {
  try {
    const categoriaActualizada = await categoryService.actualizarCategoria(
      req.params.id,
      req.body
    );

    if (!categoriaActualizada) {
      return res.status(404).json({
        mensaje: "Categoría no encontrada"
      });
    }

    return res.status(200).json({
      mensaje: "Categoría actualizada correctamente",
      categoria: categoriaActualizada
    });

  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al actualizar la categoría",
      error: error.message
    });
  }
};

const eliminarCategoria = async (req, res) => {
  try {
    const categoriaEliminada = await categoryService.eliminarCategoria(
      req.params.id
    );

    if (!categoriaEliminada) {
      return res.status(404).json({
        mensaje: "Categoría no encontrada"
      });
    }

    return res.status(200).json({
      mensaje: "Categoría eliminada correctamente",
      categoria: categoriaEliminada
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar la categoría",
      error: error.message
    });
  }
};

module.exports = {
  obtenerCategorias,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria
};
