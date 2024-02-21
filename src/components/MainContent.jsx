import React from 'react';
import RecipeGenerator from './Contents/GetIngredients';
import FoodGenerator from './Contents/GetFood';
import Home from './Contents/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Contents/About';
import RestaurantFinder from './Contents/FindRestaurants';




const MainContent = () => {
  return (
    <main className="col-md-9">
      <div>
        <h2 className='page-heading'>Explore Great Culinary Experience</h2>
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/food-ideas' element={<FoodGenerator/>}></Route>
            <Route path='/ingredients' element={<RecipeGenerator/>}></Route>
            <Route path='/restaurants-near-me' element={<RestaurantFinder/>}></Route>
          </Routes>
      </div>
    </main>
  );
}

export default MainContent;
