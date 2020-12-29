const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    mensaje: 'Bienvenido a la API de Suculentas y más',
  });
});
