require('dotenv').config();
const { Router } = require('express');
const router = Router();

const hotelRoutes = require('../middlewares/hotelRoutes')
//Importo todos los routers;
// const users = require('./users');

//modelos
// const User = require('../models/User')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/hotel', hotelRoutes)


module.exports = router;