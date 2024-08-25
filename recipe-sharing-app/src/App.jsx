import { Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing Application</h1>
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
        </>} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
