const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('../config');
const { getUserByMail } = require('../models/usuario');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body.mail);
  console.log(req.body.password);

  const usuario = await getUserByMail(req.body.mail);
  const esPasswordCorrecta = await bcrypt.compare(req.body.password, usuario.password);
  if (esPasswordCorrecta) {
    delete usuario.password;

    const token = jwt.sign(usuario, config.secreto);
  
    res.status(200).json({
      token,
      usuario
    });
  } else {
    res.status(401).json({error: 'mail o password incorrectos'})
  }
});

module.exports = router;
