var express = require('express');
const { updateUser } = require('../models/usuario');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', async (req, res, next) => {
  if (req.body.id && !req.body.password) {
    const usuarioActualizado = await updateUser(req.body);
    res.status(200).json({
      message: 'actualizacion exitosa',
      data: usuarioActualizado
    })
  }else {
    res.status(404).json({
      error: 'datos enviados erroneos'
    })
  }
});

module.exports = router;
