const userService = require("../services/userService");

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await userService.obtenerUsuarios();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener los usuarios",
      error: error.message
    });
  }
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await userService.obtenerUsuarioPorId(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener el usuario",
      error: error.message
    });
  }
};

// Crear un usuario
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await userService.crearUsuario(req.body);

    return res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: {
        _id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        rol: nuevoUsuario.rol,
        createdAt: nuevoUsuario.createdAt
      }
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al crear el usuario",
      error: error.message
    });
  }
};

// Actualizar un usuario
const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await userService.actualizarUsuario(
      req.params.id,
      req.body
    );

    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json({
      mensaje: "Usuario actualizado correctamente",
      usuario: usuarioActualizado
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "Error al actualizar el usuario",
      error: error.message
    });
  }
};

// Eliminar un usuario
const eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await userService.eliminarUsuario(req.params.id);

    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.status(200).json({
      mensaje: "Usuario eliminado correctamente",
      usuario: usuarioEliminado
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar el usuario",
      error: error.message
    });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};