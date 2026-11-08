const User = require("../../models/User");

// Obtener todos los usuarios
const obtenerUsuarios = async () => {
  return await User.find().select("-password");
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (id) => {
  return await User.findById(id).select("-password");
};

// Crear un usuario
const crearUsuario = async (datosUsuario) => {
  const nuevoUsuario = new User(datosUsuario);
  return await nuevoUsuario.save();
};

// Actualizar un usuario
const actualizarUsuario = async (id, datosUsuario) => {
  const usuario = await User.findById(id);

  if (!usuario) {
    return null;
  }

  Object.assign(usuario, datosUsuario);

  return await usuario.save();
};

// Eliminar un usuario
const eliminarUsuario = async (id) => {
  return await User.findByIdAndDelete(id).select("-password");
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};