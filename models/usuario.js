const { QueryTypes } = require('sequelize');
const sequelize = require('../models/conexion');

const getUserByMail = async (mail) => {
  const data = await sequelize.query(`
    SELECT id, nombre, mail, apellido, admin, password
    FROM usuarios
    WHERE mail=?
  `, { replacements: [mail], type: QueryTypes.SELECT });
  const usuario = data[0] ? data[0] : {};
  console.log(usuario);
  return usuario;
};

const deleteUser = () => {

};

module.exports = {
  getUserByMail,
  deleteUser
}