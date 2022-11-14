const  router  = require('express').Router()
require ('dotenv').config()

const {YOUR_API_KEY} = process.env
const axios = require('axios')
const {Recipe, Diet} = require ('../db')
// const getAllrecipes = require('./controller')


// const router = Router()

const getApiInfo = async () => {
    const URL = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
    const apiInfo = URL.data.results.map(e => {
        return {
            id: e.id,
            name: e.title,
            image: e.image,
            diets: e.diets.map(d => {return {name: d}}),
            healthScore: e.healthScore,
            steps: e.analyzedInstructions,
            summary: e.summary
        }
    })
    return apiInfo // Me traigo la info de la api
}


const getDBInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'], // incluye el modelo para que se genere la relacion con Diet
            through: {
                attributes: [], // me traeria todos en caso de que fueran mas sin la comprobacion through
            },
        }
    })
}


const getAllrecipes = async () =>{
    const apiInfo = await getApiInfo ();
    const DBInfo = await getDBInfo();
    const infoTotal = apiInfo.concat(DBInfo)

    return infoTotal
}




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
    const id = req.params.id
    try {
        const allRecipes = await getAllrecipes()
        if(id) {
            let recipeId = allRecipes.filter(r => r.id == id)
            recipeId.length ?
                res.status(200).send(recipeId) :
                res.status(400).send('Recipe Id not found')
        }
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
})


router.post('/', async (req,res) => {
    let {name, summary, healthScore, steps, diets, image, createInDb} = req.body
    try {

        let recipeCreate = await Recipe.create({
            name,
            summary,
            steps,  
            healthScore,
            diets,
            image,
            createInDb
        })
        
        for (let i = 0; i < diets.length; i++) {
            let diet = await Diet.findOne({
                where: {name : diets[i]}
                 });

            recipeCreate.addDiet(diet)
         }
        res.send('Recipe created!')
            } catch (error) {

            res.status(400).send(error.message)
        }
        
    })

module.exports = router;