require('dotenv').config();
const { Router } = require('express');
const router = Router();

//Importo todos los routers;
// const users = require('./users');

//modelos
// const User = require('../models/User')

let usuarios = [];
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', async (req, res) => {
    res.send('<h1> Hello world </h1>')
})


module.exports = router;