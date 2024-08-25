// src/components/RecipeList.js
import React from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
    const filterRecipes = useRecipeStore(state => state.filterRecipes)
  
    useEffect(() => {
      filterRecipes()
    }, [filterRecipes])
  
    return (
      <div>
        <h2>Recipes</h2>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    )
  }


export default RecipeList