import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [query, setQuery] = useState("");
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Wanderlust
            <i className="fas fa-code"></i>
          </NavLink>
        <input
              type="text"
              placeholder="🔍 Search destination"
              className="App-Query1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log in
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      <nav className="navbar-lower">
        <div className="nav-container-lower">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/trippackage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Trip packages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/tourguide"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tour Guides
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/traveltips"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Travel Tips
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/mytrips"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Trips
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
