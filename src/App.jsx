import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Contents/Home';



import './App.css'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainContent/>
        </div>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
