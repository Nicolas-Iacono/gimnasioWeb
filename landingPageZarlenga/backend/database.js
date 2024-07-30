const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
const { Sequelize } = require('sequelize');
dotenv.config();

const connection = mysql.createPool({
  host: "localhost",
  database: "app_mc",
  user: "root",
  password: "root"
});

async function testConnection() {
  try {
    const conn = await connection.getConnection(); // Usa la instancia del pool de conexiones
    console.log('Conexión a la base de datos ha sido establecida exitosamente.');
    conn.release(); // Libera la conexión al pool
  } catch (err) {
    console.error('No se pudo conectar a la base de datos:', err);
  }
}

async function testQuery() {
  try {
    const [rows, fields] = await connection.query('SELECT 1 + 1 AS solution'); // Usa la instancia del pool de conexiones
    console.log('La solución es:', rows[0].solution);
  } catch (err) {
    console.error('Error en la consulta:', err);
  }
}

testConnection();
testQuery();

module.exports = connection;
