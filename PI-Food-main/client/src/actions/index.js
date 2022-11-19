import axios from 'axios'
// export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
// conexion entre el front y el back para la ruta de RECIPES 
export function getAllRecipes() {
    return async function (dispatch) {
        var recipes = await axios.get("http://localhost:3001/recipes")
        
        return dispatch({
            type: 'GET_ALL_RECIPES',
            payload: recipes.data
        })
    }
}   // Despues de esto pasamos a trabajar en el reducer...

export const recipesById = (id) => {
    return async function (dispatch) {
        let recipesId = await axios.get(`http://localhost:3001/recipes/${id}`)
        
        return dispatch({
            type: 'GET_RECIPES_BY_ID',
            payload: recipesId.data
        })
    }
}