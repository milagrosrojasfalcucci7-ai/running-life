const express = require("express");
const router = express.Router();

const inscriptionController = require("../controllers/inscriptionController");

// Crear una inscripción
router.post("/", inscriptionController.crearInscripcion);

// Obtener todas las inscripciones
router.get("/", inscriptionController.obtenerInscripciones);

// Obtener una inscripción por ID
router.get("/:id", inscriptionController.obtenerInscripcionPorId);

// Actualizar una inscripción
router.put("/:id", inscriptionController.actualizarInscripcion);

// Eliminar una inscripción
router.delete("/:id", inscriptionController.eliminarInscripcion);

module.exports = router;