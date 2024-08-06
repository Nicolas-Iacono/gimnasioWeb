const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Crear una instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME || 'mov-consiente',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306, // Ajusta el puerto si es necesario
  }
);

// Función para probar la conexión
const connDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión con base de datos exitosa');
  } catch (error) {
    console.log('Error de conexión con base de datos:', error);
  }
};

// Ejecutar la función de prueba de conexión
connDB();

// Exportar la instancia de Sequelize
module.exports = sequelize;
