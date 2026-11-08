
const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

// Obtener todas las categorías
router.get("/", categoryController.obtenerCategorias);

// Crear una categoría
router.post("/", categoryController.crearCategoria);

// Actualizar una categoría
router.put("/:id", categoryController.actualizarCategoria);

// borrar cat
router.delete("/:id", categoryController.eliminarCategoria);

module.exports = router;
