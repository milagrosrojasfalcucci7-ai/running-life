const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Obtener todos los usuarios
router.get("/", userController.obtenerUsuarios);

// Obtener un usuario por ID
router.get("/:id", userController.obtenerUsuarioPorId);

// Crear un usuario
router.post("/", userController.crearUsuario);

// Actualizar un usuario
router.put("/:id", userController.actualizarUsuario);

// Eliminar un usuario
router.delete("/:id", userController.eliminarUsuario);

module.exports = router;