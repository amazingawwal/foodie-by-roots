import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <aside className="col-md-3 sidebar">
      <h2 className='page-heading'>Menu</h2>
      <hr />
      <ul className='menu-list'>
        <li className='color1' id='recipe'>
            <img src="/Recipe.jpg" alt="" />
            <Link to="/ingredients" >Recipe</Link>
        </li>
        <li className='color2' id='food-ideas'>
            <img src="/Food2.jpg" alt="" />
            <Link to="/food-ideas">Food Ideas</Link>
        </li>
        <li className='color1' id='restaurants-near-me'>
            <img src="/location.jpg" alt="" />
            <Link to="/restaurants-near-me">Restaurants Nearby</Link>
        </li>
        <li className='color2' id='fridge-suggestions'>
            <img src="/Fridge.jpg" alt="" />
            <Link to="/fridge-suggestions">Fridge Suggestions</Link>
        </li>
        {/* Add more menu options as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
