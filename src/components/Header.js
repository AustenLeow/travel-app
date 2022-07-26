import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Header(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [query, setQuery] = useState("");
  // const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiOTIzZWI3YTUtYjY3ZC00ZWE4LTkyNjctNGVhOWUxM2NkNTQ3IiwiZXZlbnRfaWQiOiJmMzAzNGQ0Ni01NzA1LTRiODAtYjIyNi1jMjdkYWM5NDdkN2YiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzI5MzQ2LCJleHAiOjE2NTgzMzI5NDYsImlhdCI6MTY1ODMyOTM0NiwianRpIjoiNWQ2MzliN2YtYWRkNy00NjlkLTkzOTgtODIzNmEyMWE0OWFmIiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.XpfzCwRJlc-V8Tdncu_1HhNy19uq3uTvZzRvbjedqbuL3lGageVhs0uTLhGrQKVkjQUC_6ZRrbe2oF_Q2Mh0ss9nG9MauwzIbWpYc_1bg9CR1_r2YTiOUA_uJ2vocahTeIltVMb0x8LWwAM9E3M3GzM2WA8Kt84mBhQnMAvReU3hbQwltdtpOFb-QuxWazRV6GsqpxMXM_BuPBroTmKJt_RD5hfvhVQvktY34K-btdVh7ijhMCkAmEoRJsgRsRT3TAvBOPCfY19l8ZlCTwPLF4qNh1Jn0K2iZ6k_7gbwS5G7I2ENqGbHae7GSTkkx-guV-_C6_ekoLadc-AE2Wcvmw"
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`} 
  //   }

  //   axios.get(
  //     `/api/v1/user`,
  //     config
  //   ).then(data => console.log(data.data))

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
            <li className="nav-item">
              <NavLink
                exact
                to="/Cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart
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
