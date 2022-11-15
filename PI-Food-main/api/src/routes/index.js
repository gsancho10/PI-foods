const router = require('express').Router()
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

require('dotenv').config()
const {Recipe, Diet} = require('../db')
const axios = require('axios')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const recipesRouter = require('./recipes.js')
const dietsRouter = require('./diets.js')

// const router = Router();

router.use('/recipes', recipesRouter)
router.use('/diets', dietsRouter)     

module.exports = router;
