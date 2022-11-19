// import { GET_ALL_RECIPES } from "../actions";

const initialState = {
    recipes : [],
    recipeDetail : {},
    diets : []
}



const rootReducer = (state = initialState, action) => {
    switch  (action.type) {
        case 'GET_ALL_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
            default:
                return state;
        
        case 'GET_RECIPES_BY_ID': 
            return {
                ...state,
                recipeDetail: action.payload
            }
    }
}

export default rootReducer;