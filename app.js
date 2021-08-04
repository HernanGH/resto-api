const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');
const loginRouter = require('./routes/login');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/v1/usuarios', usuariosRouter);
app.use('/v1/login', loginRouter);
app.use('/v1/productos', productosRouter);

module.exports = app;
