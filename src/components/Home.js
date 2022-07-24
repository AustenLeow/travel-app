import React, { useState } from "react";
import "./Home.css";
import Card from "./Card";
import family from "../images/family.jpg";
import bmarina from "../images/bmarina.jpg";
import wet from "../images/water.jpg";
import nat from "../images/nat.jpg";
import spa from "../images/spa.jpg";
import hawker from "../images/hawker.jpg";
import { NavLink } from "react-router-dom";

// ES7 snippets to do 'rfce'

function Home() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="home">
    <div><h1>Ongoing promotions / events</h1></div>
      <div className="home__section">
        
        
        <NavLink exact to="/bigdiscountforfamilies" onClick={handleClick}>
          <Card
            src={family}
            title="Discount for families"
            description="Spend your vacation with your family and get a great discount on your next stay."
          />
        </NavLink>
        <NavLink exact to="/UniqueStays" onClick={handleClick}>
        <Card
          src={bmarina}
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        </NavLink>
        <NavLink exact to="/TooCoolForSchool" onClick={handleClick}>
        <Card
          src={wet}
          title="Too cool for school"
          description="Spend your vacation with your friends at water parks and get a great discount."
        />
        </NavLink>
        
      </div>
      <div><h1>Hottest trip packages</h1></div>
      <div className="home__section">
      
        <NavLink exact to="/NationalDayDiscount" onClick={handleClick}>
        <Card
          src={nat}
          title="National Day partyyy at Marina"
          description="Party like there's no tomorrow near Singapore's most famous skyline."
          price="$130/night"
        />        
        </NavLink>
        <NavLink exact to="/RelaxInLuxury" onClick={handleClick}>
        <Card
          src={spa}
          title="Spa-cation at Orchard"
          description="'Chill' in a modern, airy, modern spa this summer."
          price="$350/night"
        />
        </NavLink>
        <NavLink exact to="/Hawker" onClick={handleClick}>
        <Card
          src={hawker}
          title="Experience local at Chinatown"
          description="Role play as a local in a popular neighborhood."
          price="$70/night"
        />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
