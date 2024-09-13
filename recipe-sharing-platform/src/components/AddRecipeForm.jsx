import { useState } from 'react';
import { Link } from 'react-router-dom';
const AddRecipeForm = () => {
  // State to manage form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split(',').length < 2)
      newErrors.ingredients = 'At least 2 ingredients are required';
    if (!steps) newErrors.steps = 'Preparation steps are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit the form (for now, just console log the data)
      console.log({
        title,
        ingredients: ingredients.split(','),
        steps,
      });

      // Clear the form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">

      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
      <Link to="/" className="w-full bg-green-500 text-center text-white px-3 py-2 my-4 inline-block rounded-md hover:bg-green-400">Back to Home</Link>

    </div>
  );
};

export default AddRecipeForm;
