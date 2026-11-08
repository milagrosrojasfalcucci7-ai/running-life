const express = require("express");
const router = express.Router();

const resultController = require("../controllers/resultController");

// Obtener todos los resultados
router.get("/", resultController.obtenerResultados);

// Obtener un resultado por ID
router.get("/:id", resultController.obtenerResultadoPorId);

// Crear un resultado
router.post("/", resultController.crearResultado);

// Actualizar un resultado
router.put("/:id", resultController.actualizarResultado);

// Eliminar un resultado
router.delete("/:id", resultController.eliminarResultado);

module.exports = router;