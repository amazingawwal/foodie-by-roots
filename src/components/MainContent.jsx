import React from 'react';
import RecipeGenerator from './Contents/GetIngredients';
import FoodGenerator from './Contents/GetFood';
import Home from './Contents/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Contents/About';




const MainContent = () => {
  return (
    <main className="col-md-9">
      <div>
        <h2 className='page-heading'>Explore Great Culinary Experience</h2>
        <Routes>
            <Route path='/' element ={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
      </div>
    </main>
  );
}

export default MainContent;
