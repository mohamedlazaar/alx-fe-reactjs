// src/store/recipeStore.js
import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites:[],
  
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
  
  setSearchTerm: (term) => {
    set({ searchTerm: term })
    get().filterRecipes()
  },
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
// In recipeStore.js
generateRecommendations: () => set((state) => {
  const recommended = state.recipes.filter(recipe =>
    !state.favorites.includes(recipe.id) && Math.random() > 0.5
  ).slice(0, 3);  // Limit to 3 recommendations
  return { recommendations: recommended };
}),
}))

export default useRecipeStore