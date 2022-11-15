const  router  = require('express').Router()
require ('dotenv').config()

const {YOUR_API_KEY} = process.env
const axios = require('axios')
const { Recipe, Diet } = require ('../db')
const { getAllrecipes } = require('./controller')




router.get('/', async (req,res) => {
    const name = req.query.name
    try {
        const allInfo = await getAllrecipes()
            if(name) {
                let recipeName = allInfo.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
                recipeName.length ?
                res.status(200).send(recipeName) :
                res.status(400).send("Recipe not found")
            } else{
                res.status(200).send(allInfo)
            }
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
})


router.get('/:id', async (req,res) => {
    const { id } = req.params
    const allRecipes = await getAllrecipes()
    if(id) {
        let recipeId = await allRecipes.filter((e) => e.id == id)
            recipeId.length?
            res.status(200).json(recipeId) :
            res.status(400).send('Recipe not found')
            }
    }
)


router.post('/', async (req,res) => {
    let {   name, summary, healthScore, steps, diets, image, createInDb } = req.body
    if(!name || !summary || !steps || !healthScore) {
        throw Error ('Faltan datos para crear receta')
    }
    try {

        let recipeCreate = await Recipe.create({
            name,
            summary,
            steps,  
            healthScore,
            image,
            createInDb
        })
        
        const dietsInDb = await Diet.findAll({
            where: { name: diets },
        })
        recipeCreate.addDiet(dietsInDb)
        res.status(200).json(recipeCreate)

    } catch (error) {

            res.status(400).send(error.message)
        }
        
    })

module.exports = router;