import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Status from "./cognito-api/Status";
import { AccountContext } from "../components/cognito-api/Account";

function Header(props) {

  const authctx = useContext(AccountContext);
  const isLoggedIn = authctx.isLoggedIn;
  const logOutHandler = () => {
    authctx.logout();
  }

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
                
                to="/about"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Cart"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  My Cart
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  
                  to="/signup"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  Sign up
                </NavLink>
              </li> 
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                <NavLink
                  
                  to="/login"
                  className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                  onClick={handleClick}
                >
                  Log in
                </NavLink>
              </li> 
              )}
              {isLoggedIn && (
                <li >
                <NavLink
                  to="/"
                  
                  onClick={logOutHandler, handleClick}
                >
                  <Status />
                </NavLink>
              </li> 
              )}

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
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={handleClick}
              >
                Trip Packages
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/tourguide"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={handleClick}
              >
                Tour Guides
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/traveltips"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={handleClick}
              >
                Travel Tips
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/mytrips"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
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
