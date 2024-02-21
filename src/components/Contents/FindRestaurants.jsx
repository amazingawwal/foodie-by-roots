import React, { useState } from 'react';
import axios from 'axios';

const RestaurantFinder = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  const findRestaurantsNearLocation = async () => {
    if (!location) {
      setError('Please enter a postcode or location.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${location}`);
      setRestaurants(response.data.restaurants);
    } catch (error) {
      setError('Error fetching restaurants. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Find Restaurants Near Me</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or location"
      />
      <button onClick={findRestaurantsNearLocation}>Find Restaurants</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {restaurants.length > 0 && (
        <ul>
          {restaurants.map((restaurant, index) => (
            <li key={index}>{restaurant.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantFinder;
