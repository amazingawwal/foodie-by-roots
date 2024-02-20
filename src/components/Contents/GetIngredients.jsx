import React, { useState } from 'react';
import axios from 'axios';

const RecipeGenerator = () => {
  const [results, setResults] = useState([]);
  const [foodType, setFoodType] = useState('');
  const [searchType, setSearchType] = useState('recipes'); // Default to searching for recipes

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/food/${searchType}/search?query=${foodType}&apiKey=f2c89358faa046aba36a500e21dafa0d`);
      setResults(response.data.results);
    } catch (error) {
      console.error(`Error fetching ${searchType}:`, error);
    }
  };

  return (
    <div>
      <h2 className='generate-food'>Get your Recipes and Ingredients</h2>
      <div>
        <input type="text" value={foodType} onChange={(e) => setFoodType(e.target.value)} placeholder="Enter food type" />
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="recipes">Recipes</option>
          <option value="ingredients">Ingredients</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className='ingredients-container'>
        {results && results.map((result, index) => (
          <div className='ingredients' key={index}>
            <h3>{result.title}</h3>
            {searchType === 'recipes' && <img src={result.image} alt={result.title} />}
            {searchType === 'ingredients' && <p>{result.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGenerator;
