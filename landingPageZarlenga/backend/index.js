const express = require("express");
const morgan = require("morgan");
const cors = require("./middlewares/Cors");
const userRoutes = require('./routes/userRoutes');
const dbInit = require('./database/dbInit'); 
const app = express();
const path = require('path');

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"));
console.log("Escuchando en puerto " + app.get("port"));


// Middleware
app.use(morgan("dev"));
app.use(cors);
app.use(express.json());

// Rutas
const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontendPath));

app.use('/api/user', userRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(app.get("port"), async () => {
  console.log("Escuchando en puerto " + app.get("port"));
  await dbInit(); // Sincronizar modelos
});
