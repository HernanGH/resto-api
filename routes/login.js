const bcrypt = require('bcrypt');
const express = require('express');
const { getUserByNombreAndPassword } = require('../models/usuario');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body.nombre);
  console.log(req.body.password);
  const passwordHasheada = await bcrypt.hash(req.body.password, 10);

  const usuario = await getUserByNombreAndPassword(req.body.nombre, passwordHasheada);
  console.log({usuario})
  res.status(200).json(usuario);
});

module.exports = router;
