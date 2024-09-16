import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import data from '../data.json'


const HomePage = ()=>{
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        setRecipes(data);
    },[])
    return(
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">Recipe</h1>
        <div className="mb-6">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Add New Recipe
        </Link>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mx-1">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              {/* Button to navigate to Recipe Details */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
}
export default HomePage;