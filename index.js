// Creo objeto de Express
const express = require('express');

const app = express();

// Llamo a enviroments segun el ambiente que esté
const enviroment = require('./config/config').config();

// Conecto a la BD
const DB = require('./db');

DB.connectDB(enviroment.MONGO_URL);

// Llamo a Rutas
const rutas = require('./routes/index.js');

// Ruta por default
app.use('/api', rutas);

// Server
app.listen(enviroment.PORT, () => {
  console.log(`Server running on port ${enviroment.PORT}`);
});
