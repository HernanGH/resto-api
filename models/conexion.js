require('dotenv').config(); // CARGAR LA VARIABLES DE ENTORNO DESDE EL ARCHIVO .ENV

// INICIAMOS SEQUELIZE
const Sequelize = require('sequelize');
const config = require('../config');

const path = `mysql://root@${config.databaseHost}:${config.databasePort}/${config.databaseName}`;

const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate() // METODO PARA CONECTARSE A LA DB
    .then(() => {
        console.log('Conectado.');
    })
    .catch(err => {
        console.error('Error de conexion:', err);
    });

module.exports = sequelize;