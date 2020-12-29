const express = require('express');
const rutas = require('./routes/index.js');

const app = express();
app.use('/api', rutas);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
