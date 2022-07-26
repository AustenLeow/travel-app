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
      <div className="home__section">
        <NavLink exact to="/bigdiscountforfamilies" onClick={handleClick}>
          <Card
            src={family}
            title="Big Discount for families"
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
          description="Spend your vacation with your friends at water parks and get a great discount"
        />
        </NavLink>
        
      </div>
      <div className="home__section">
        <NavLink exact to="/NationalDayDiscount" onClick={handleClick}>
        <Card
          src={nat}
          title="National Day Discounts"
          description="Enjoy wonderful bundles on our national icons with wonderful discounts."
          price="£130/night"
        />        
        </NavLink>
        <NavLink exact to="/RelaxInLuxury" onClick={handleClick}>
        <Card
          src={spa}
          title="Relax in luxury"
          description="Spend your vacation in a modern, airy, modern spa this autumn."
          price="£350/night"
        />
        </NavLink>
        <NavLink exact to="/Hawker" onClick={handleClick}>
        <Card
          src={hawker}
          title="Celebrate our local culture by eating like a local"
          description="Spend your vacation in a unique neighborhood with a great local cuisine."
          price="£70/night"
        />
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
