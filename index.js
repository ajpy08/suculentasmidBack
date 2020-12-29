const express = require('express');
const rutas = require('./routes/index.js');
const enviroment = require('./config/config').config();

const app = express();
app.use('/api', rutas);

app.listen(enviroment.PORT, () => {
  console.log(`Server running on port ${enviroment.PORT}`);
});
