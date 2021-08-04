const sequelize = require('../models/conexion');

const borrarTablasSiExisten = async () => {
  await sequelize.query('DROP TABLE IF EXISTS usuarios');
  await sequelize.query('DROP TABLE IF EXISTS productos');
  await sequelize.query('DROP TABLE IF EXISTS pedidos');
};

const crearTablaUsuarios = async () => {
  await sequelize.query(`
    CREATE TABLE usuarios (
      id INT(11) AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(80) NOT NULL,
      apellido VARCHAR(80) NOT NULL,
      password VARCHAR(255) NOT NULL,
      admin BOOLEAN NOT NULL DEFAULT FALSE
    );
  `);
};

const crearTablaProductos = async () => {
  await sequelize.query(`
    CREATE TABLE productos (
      id INT(11) AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(80) NOT NULL,
      descripcion VARCHAR(255) NOT NULL,
      precio DOUBLE NOT NULL,
      fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      fecha_edicion TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

const init = async () => {
  await borrarTablasSiExisten();
  await crearTablaUsuarios();
  await crearTablaProductos();
};
init();