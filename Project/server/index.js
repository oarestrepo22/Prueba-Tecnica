const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
// Crear el servidor  de express
const app = express();

// Base de datos
dbConnection();

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Directorio publico
app.use(express.static('public'));

// Crear los listener para escuchar peticiones
app.listen(
    process.env.PORT,
    console.log(`Server running on port ${process.env.PORT}`)
);
