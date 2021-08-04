require('dotenv').config(); // CARGAR LA VARIABLES DE ENTORNO DESDE EL ARCHIVO .ENV

// INICIAMO SEQUELIZE
const Sequelize = require('sequelize');

const path = `mysql://root@${process.env.DATA_BASE_HOST}:${process.env.DATA_BASE_PORT}/${process.env.DATA_BASE_NAME}`;

const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate() // METODO PARA CONECTARSE A LA DB
    .then(() => {
        console.log('Conectado.');
    })
    .catch(err => {
        console.error('Error de conexion:', err);
    });

module.exports = sequelize;