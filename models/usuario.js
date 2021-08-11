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

const updateUser = async (user) => {
  console.log(user);
  await sequelize.query(`
    UPDATE usuarios SET nombre=? WHERE id = ?;
  `, { replacements: [user.nombre, user.id], type: QueryTypes.UPDATE });

  const data = await sequelize.query(`
    SELECT id, nombre, mail, apellido, admin
    FROM usuarios
    WHERE id=?
  `, { replacements: [user.id], type: QueryTypes.SELECT });

  console.log({data});

  const usuario = data[0] ? data[0] : {};
  console.log(usuario);
  return usuario;
};

module.exports = {
  getUserByMail,
  deleteUser,
  updateUser
}