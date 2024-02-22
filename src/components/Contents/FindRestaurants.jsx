import React, { useState } from 'react';
import axios from 'axios';

const RestaurantFinder = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');

  const findRestaurantsNearLocation = async () => {
    if (!location) {
      setError('Please enter a city or location.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`, {
        headers: {
          Authorization: `Bearer sdEy18yfkRZKA_x9Kaa7jTN7YNBIbF3oGBJLdwn1o02J9B0VtGfJX0keNDeYN3c6IIppEs1aqsFnNlnOuHnfwq_iB8r8EE6xW2cnCGdS7NwSpFza2B_yaHb4fq7WZXYx`
        }
      });
      setRestaurants(response.data.businesses);
    } catch (error) {
      setError('Error fetching restaurants. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className='generate-food'>Restaurants Near Me</h2>
      <div className='search'>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city or location"
        />
        <button onClick={findRestaurantsNearLocation}>Find Restaurants</button>
      </div>
      <hr />
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
