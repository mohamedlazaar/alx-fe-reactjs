import { useParams } from 'react-router-dom';
import mockData from '../data.json'; // Assuming the mock data is the same as in HomePage

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe id from the URL params
  const recipe = mockData.find((recipe) => recipe.id === parseInt(id)); // Find the recipe based on the id

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover mb-4 rounded-lg" />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
