const express = require("express");
const morgan = require("morgan");
const database = require("./database");
const cors = require("cors");
const sendMail = require('./mailer')


// Configuración inicial
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"));
console.log("Escuchando en puerto " + app.get("port"));

// Middleware
app.use(morgan("dev"));
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000","https://movimiento-consiente.onrender.com"]
}));
app.use(express.json()); 
// Rutas

app.get('/', (req, res) => {
  res.send('El servidor está funcionando');
});

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


app.post('/user', async (req, res) => {
  let connection;
  try {
    connection = await database.getConnection();

    // Obtener los datos del cuerpo de la solicitud
    const { nombre, apellido, edad, peso, altura, email } = req.body;

    // Consulta SQL para insertar un nuevo usuario
    const [result] = await connection.query(
      'INSERT INTO users (nombre, apellido, edad, peso, altura, email) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, apellido, edad, peso, altura, email]
    );

    // Enviar una respuesta de éxito
    res.status(201).json({ message: 'Usuario creado con  ', userId: result.insertId,nombre: nombre ,edad: edad, altura: altura, peso: peso, email: email });

  // Contenido del correo con estilos HTML
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #4CAF50;">Nuevo usuario agregado</h2>
    <p>Se ha agregado un nuevo usuario con los siguientes detalles:</p>
    <ul>
      <li><strong>Nombre:</strong> ${nombre}</li>
      <li><strong>Apellido:</strong> ${apellido}</li>
      <li><strong>Edad:</strong> ${edad}</li>
      <li><strong>Peso:</strong> ${peso} kg</li>
      <li><strong>Altura:</strong> ${altura} cm</li>
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
