const router = require('express').Router();
const { Diet } = require('../db');  //importo los modelos



router.get('/', async (req, res) => {
    const diets = [
        "gluten free",
        "dairy free",
        "paleolithic",
        "ketogenic",
        "lacto ovo vegetarian",
        "vegan",
        "pescatarian",
        "primal",
        "fodmap friendly",
        "whole 30",
    ]

    diets.forEach(el => {
        Diet.findOrCreate({ 
            where: { name: el }  //por cada tipo de dieta
        })
    })

    const allDiets = await Diet.findAll()
    res.send(allDiets)
})


module.exports = router;