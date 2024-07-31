const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");
const sendMail = require('./mailer')
const path = require('path');
const Sequelize  = require('sequelize');
// Configuración inicial
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"));
console.log("Escuchando en puerto " + app.get("port"));

// Middleware
app.use(morgan("dev"));
const allowedOrigins = [
  'https://movimiento-consiente.onrender.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir solicitudes sin origin, como las que vienen de herramientas de desarrollo
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Si la URL no está en la lista, rechazar la solicitud
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json()); 


// Rutas

const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontendPath));

app.get('/messages', async (req, res) => {
  let connection;
  try {
    connection = await database.getConnection();
    const [rows] = await connection.query(
      'SELECT messages.content, users.nombre FROM messages INNER JOIN users ON messages.users_idusers = users.idusers;'
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los mensajes');
  } finally {
    if (connection) connection.release();
  }
});


app.post('/api/user', async (req, res) => {
  let connection;
  try {
    connection = await database.getConnection();

    // Obtener los datos del cuerpo de la solicitud
    const { username, lastname, age, weight, height, email } = req.body;

    // Consulta SQL para insertar un nuevo usuario
    const [result] = await connection.query(
      'INSERT INTO users (username, lastname, age, weight, height, email) VALUES (?, ?, ?, ?, ?, ?)',
      [username,lastname,age, weight, height, email]
    );

    // Enviar una respuesta de éxito
    res.status(201).json({ message: 'Usuario creado con  ', userId: result.insertId,username: username, lastname: lastname, age: age, height: height, weight: weight, email: email });

  // Contenido del correo con estilos HTML
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #4CAF50;">Nuevo usuario agregado</h2>
    <p>Se ha agregado un nuevo usuario con los siguientes detalles:</p>
    <ul>
      <li><strong>Nombre:</strong> ${username}</li>
      <li><strong>Apellido:</strong> ${lastname}</li>
      <li><strong>Edad:</strong> ${age}</li>
      <li><strong>Peso:</strong> ${weight} kg</li>
      <li><strong>Altura:</strong> ${height} cm</li>
      <li><strong>Email:</strong> ${email}</li>
    </ul>
  </div>
`;

// Envía el correo de notificación
sendMail(
  'zarlengaleandroadrian@gmail.com',
  'Nuevo usuario agregado',
  htmlContent
);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar los datos del usuario');
  } finally {
    if (connection) connection.release();
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: 'localhost',
  dialect: 'mysql' // o el dialecto que estés usando
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos ha sido establecida exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();