require('dotenv').config();
const Sequelize = require('sequelize');

const path = `mysql://root@${process.env.DATA_BASE_HOST}:${process.env.DATA_BASE_PORT}/${process.env.DATA_BASE_NAME}`;
console.log(path);

const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate()
    .then(() => {
        console.log('Conectado.');
    })
    .catch(err => {
        console.error('Error de conexion:', err);
    });

module.exports = sequelize;