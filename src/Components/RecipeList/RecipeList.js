import React from 'react'
import {recipes} from "../../data.js"



export const RecipeList = () => {
    console.log(recipes)
  return (
    <div><h1>RecipeList</h1>
    {recipes.map(el => <div> <h1> {el.recipe.label}</h1> <img src={el.recipe.image} alt=""/> </div>)}
    </div>
  )
}


