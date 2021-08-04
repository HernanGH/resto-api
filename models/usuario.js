const sequelize = require('../models/conexion');

const getUserByNombreAndPassword = async (nombre) => {
  const usuario = await sequelize.query(`
    SELECT id, nombre, apellido, admin, password
    FROM usuarios
    WHERE nombre=?
  `, { replacements: [nombre]});
  console.log(usuario);
  return usuario;
};

module.exports = {
  getUserByNombreAndPassword
}