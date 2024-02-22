import React, { useState } from 'react';
import axios from 'axios';

const FridgeIngredientSuggester = () => {
  const [ingredients, setIngredients] = useState('');
  const [suggestedDishes, setSuggestedDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const suggestDishesFromFridge = async () => {
    if (!ingredients) {
      setError('Please enter the items in your fridge.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=f2c89358faa046aba36a500e21dafa0d&includeNutrition=false&ranking=1`);
      if (response.data.length > 0) {
        setSuggestedDishes(response.data);
      } else {
        setError('No dishes found. Try different ingredients!');
        setSuggestedDishes([]);
      }
    } catch (error) {
      setError('Error fetching suggested dishes. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className='generate-food'>Fridge Suggestions</h2>
      <div className='search'>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter items in your fridge (comma-separated)"
      />
      <button className='' onClick={suggestDishesFromFridge}>Suggest Dishes</button>
      </div>
      <hr />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {suggestedDishes.length > 0 && (
        <div>
          <h3 className='generate-food'>Suggested Dishes:</h3>
         
          <ul className='dishes-container'>
            {suggestedDishes.map((dish, index) => (
              <li className='dishes' key={index}>
                <div >
                  <img src={dish.image} alt={dish.title} />
                  <p>{dish.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FridgeIngredientSuggester;
