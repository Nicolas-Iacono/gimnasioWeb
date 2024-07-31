const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require('sequelize');
dotenv.config();

const sequelize = new Sequelize('mov-consiente', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  },{
    timestamps: false, // Desactiva createdAt y updatedAt
  });

const Message = sequelize.define('Message', {
  idMessage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId : {
    type: DataTypes.INTEGER,
    references:{
      model: User,
      key: 'idUser',
    },
  },
},{
  timestamps:false,
});

User.hasOne(Message,{foreignKey:'userId'});
Message.belongsTo(User,{foreignKey:'userId'})
sequelize.sync();

const connection = mysql.createPool({
  host: "localhost",
  database: "mov-consiente",
  user: "root",
  password: "root",
});

async function testConnection() {
  try {
    const conn = await connection.getConnection();
    console.log('Conexión a la base de datos ha sido establecida exitosamente.');
    conn.release();
  } catch (err) {
    console.error('No se pudo conectar a la base de datos:', err);
  }
}

async function testQuery() {
  try {
    const [rows, fields] = await connection.query('SELECT 1 + 1 AS solution');
    console.log('La solución es:', rows[0].solution);
  } catch (err) {
    console.error('Error en la consulta:', err);
  }
}

testConnection();
testQuery();

module.exports = connection;
