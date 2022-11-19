import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getAllRecipes } from '../actions';
import {Link} from 'react-router-dom'
import Card from './Card'


export default function Home (){

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes) 

    useEffect(() => {
        dispatch(getAllRecipes())
    },[dispatch])

    function handleClick(e){  // SIRVE PARA QUE VUELVA A TRAER LAS RECETAS POR CUALQUIER COSA
        e.preventDefault();   // LO AGREGAMOS EN EL BOTON
        dispatch(getAllRecipes())
    }
    // ESTO TAL VEZ NO ME SIRVA, LO MANEJO POR LAS DUDAS
    return(
        <div>
        <Link to = '/recipes'>Create recipe</Link>    
        <button onClick={e=> {handleClick(e)}}>Refresh</button>
        <div>
            <select>
                <option value= 'asc'>Ascendente</option> 
                <option value = 'desc'>Descendente</option>
            </select>
            <select>
                <option value='all'>All</option>
                <option value= 'dairy'>Dairy free</option>
                <option value= 'paleo'>Paleolithic</option>
                <option value= 'keto'>Ketogenic</option>
                <option value= 'laove'>Lacvo ovo vegetarian</option>
                <option value= 'vegan'>Vegan</option>
                <option value= 'pesca'>Pescatarian</option>
                <option value= 'primal'>Primal</option>
                <option value= 'fodmap'>Fodmap friendly</option>
                <option value= 'whole'>Whole 30</option>
            </select>
            <select>
                <option value='all'>All</option>
                <option value='db'>Created</option> 
                <option value='api'>FromApi</option>
            </select>
        
        {
            allRecipes && allRecipes.map(el => {
                <Card name={el.title} image={el.img} diet={el.diet} />
            })
        }
        </div>
        </div>
    ) // EL VALUE SIRVE PARA LA LOGICA DE DESPUES
        
    
}