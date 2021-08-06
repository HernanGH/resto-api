const config = {
  secreto: process.env.SECRET || 'ACAMICA',
  databaseName: process.env.DATA_BASE_NAME || 'dalila_resto',
  databaseHost: process.env.DATA_BASE_HOST || 'localhost',
  databasePort: process.env.DATA_BASE_PORT || '3306',
};

module.exports = config;
