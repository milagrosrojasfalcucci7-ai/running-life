
const Category = require("../models/categoryModel");

// Obtener todas las categorías
const obtenerCategorias = async () => {
  return await Category.find();
};

// Crear una categoría
const crearCategoria = async (datosCategoria) => {
  const nuevaCategoria = new Category(datosCategoria);
  return await nuevaCategoria.save();
};
const eliminarCategoria = async (id) => {
  return await Category.findByIdAndDelete(id);
};

// Actualizar una categoría por su ID
const actualizarCategoria = async (id, datosCategoria) => {
  return await Category.findByIdAndUpdate(
    id,
    datosCategoria,
    { new: true, runValidators: true }
  );
};

module.exports = {
  obtenerCategorias,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria
};

