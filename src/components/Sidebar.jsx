import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="col-md-3 sidebar">
      <h2 className='page-heading'>Menu</h2>
      <ul className='menu-list'>
        
        <a href=""><li className='color1' id='recipe'>Recipe</li></a>
        <a href=""><li className='color2' id='food-ideas'>Food Ideas</li></a>
        <a href=""><li className='color1' id='restaurant-near-me'>Restaurants Near Me</li></a>
        <a href=""><li className='color2' id='fridge-suggestions'>Suggestions from my Fridge</li></a>
        {/* Add more menu options as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
