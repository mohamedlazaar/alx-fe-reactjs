import React, {useState, useEffect} from "react";
import data from '../data.json'


const HomePage = ()=>{
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        setRecipes(data);
    },[])
    return(
        <div className="container mx-auto p-6">
            <h1 className="text-center text-4xl font-bold text-green-500">Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
                {recipes.map((recipe)=>(
                    <div key={recipe.id} className="bg-green-400 flex flex-col justify-center items-center py-6 shadow-lg hover:bg-green-600">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded" />
                        <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                        <p className="text-gray-600 mt-2">{recipe.summary}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
export default HomePage;