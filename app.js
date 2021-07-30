var express = require('express');
var cors = require('cors');
var path = require('path');
var logger = require('morgan');

var conexion = require('./models/conexion');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var productosRouter = require('./routes/productos');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/v1/usuarios', usuariosRouter);
app.use('/v1/productos', productosRouter);

module.exports = app;
