const express = require("express");
const morgan = require("morgan");
const cors = require("./middlewares/Cors");
const userRoutes = require('./routes/userRoutes');
const dbInit = require('./database/dbInit'); 
const app = express();
app.set("port", process.env.PORT || 4000);

// Middleware
app.use(morgan("dev"));
app.use(cors);
app.use(express.json());

// Rutas
const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(frontendPath));

app.use('/', userRoutes);


app.listen(app.get("port"), async () => {
  console.log("Escuchando en puerto " + app.get("port"));
  await dbInit(); // Sincronizar modelos
});
