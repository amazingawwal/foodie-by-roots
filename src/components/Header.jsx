import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='heading-nav'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid logo-image">
        <img src="/logo.png" alt="logo" />
        <Link className="navbar-brand" to="/">Roots App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse nav-header header-navbar navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">Food Ideas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/restaurants">Restaurants Nearby</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Header;
