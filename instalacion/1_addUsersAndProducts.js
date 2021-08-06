const bcrypt = require('bcrypt');
const sequelize = require('../models/conexion');

// HASHEO DE PASSWORD Y COMPARE DE PASSWORD CORRECTA E INCORRECTA
// const hash = await bcrypt.hash('1234', 10);
//   console.log(hash);

//   const match = await bcrypt.compare('1234', hash);
//   console.log('pass => 1234: ', match);

//   const match2 = await bcrypt.compare('admin', hash);
//   console.log('pass => admin: ', match2);

const addUsers = async () => {
  const passwordHasheada = await bcrypt.hash('1234', 10);

  await sequelize.query(`
    INSERT INTO usuarios
    (
      nombre, apellido, mail, password
    ) VALUES (
      'hernan', 'condori', 'hernan@mail.com', '${passwordHasheada}'
    );
  `);

  const passwordAdminHasheada = await bcrypt.hash('admin', 10);

  await sequelize.query(`
    INSERT INTO usuarios
    (
      nombre, apellido, mail, password, admin
    ) VALUES (
      'admin', 'admin', 'admin@mail.com', '${passwordAdminHasheada}', 1
    );
  `);
};
addUsers();

const addProducts = async () => {
  await sequelize.query(`
    INSERT INTO productos
    (
      nombre, descripcion, precio
    ) VALUES (
      'cerveza', 'cerveza artesanal fria', 10
    );
  `);

  await sequelize.query(`
    INSERT INTO productos
    (
      nombre, descripcion, precio
    ) VALUES (
      'hamburguesa', 'triple cheddar, cebolla, ketchup', 15
    );
  `);
};
addProducts();