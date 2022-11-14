// const {Router} = require('express')
// require('dotenv').config();

// const {YOUR_API_KEY} = process.env;
// const axios = require('axios');
// const {Recipe,Diet} = require('../db')

// const router = Router();

// const getApiInfo = async () => {
//     const URL = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
//     const apiInfo = URL.data.results.map(e => {
//         return {
//             id: e.id,
//             name: e.title,
//             image: e.image,
//             diets: e.diets.map(d => {return {name: d}}),
//             healthScore: e.healthScore,
//             steps: e.analyzedInstructions,
//             summary: e.summary
//         }
//     })
//     return apiInfo // Me traigo la info de la api
// }


// const getDBInfo = async () => {
//     return await Recipe.findAll({
//         include: {
//             model: Diet,
//             attributes: ['name'], // incluye el modelo para que se genere la relacion con Diet
//             through: {
//                 attributes: [], // me traeria todos en caso de que fueran mas sin la comprobacion through
//             },
//         }
//     })
// }


// const getAllrecipes = async () =>{
//     const apiInfo = await getApiInfo ();
//     const DBInfo = await getDBInfo();
//     const infoTotal = apiInfo.concat(DBInfo)

//     return infoTotal
// }


// module.exports = {
//     router,
//     getAllrecipes
// }