import React, { useState } from 'react';
import axios from 'axios';

const FoodGenerator = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=f2c89358faa046aba36a500e21dafa0d`);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <h3 className='generate-food'>Generate Food Ideas</h3>
      <div className='search'>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter ingredients or keywords" />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div className="recipe" key={recipe.id}>
            <h4>{recipe.title}</h4>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGenerator;
