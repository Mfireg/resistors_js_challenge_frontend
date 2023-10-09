import React from 'react';
import logo from '../../assets/images/resistor.jpeg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{position: "static", background: "white"}}>
      <div className="container">
        <img
          src={logo}
          alt="Description"
          width="50"
          height="50"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Resistor Calculator</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
