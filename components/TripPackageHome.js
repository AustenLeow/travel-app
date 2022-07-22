import React, { useState } from "react";
import "./TripPackageHome.css";
import Card from "./Card";
import fortcanning from "../images/fortcanning.jpg";
import marinabay from "../images/marinabay.jpg";
import sentosa from "../images/sentosa.jpg";
import zoo from "../images/singaporezoo.jpg";
import bugis from "../images/bugis.jpg";
import pulau from "../images/pulau.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

function TripPackageHome() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="packages">
      <div className="home__section">
        <NavLink exact to="/trippackage/marinaexperience" onClick={handleClick}>
          <Card
            src={marinabay}
            title="Singapore Marina Experience"
            description="Enjoy a scenic evening with a private boat tour at Marina Bay Sands"
            price="$200/night"
          ></Card>
        </NavLink>
        <NavLink exact to="/trippackage/ChillAtSentosa" onClick={handleClick}>
          <Card className="Sentosa"
            src={sentosa}
            title="Chill at Sentosa"
            description="Enjoy a relaxing day at the beach at Sentosa"
          />
        </NavLink>
        <NavLink exact to="/trippackage/HistoryThrill" onClick={handleClick}>
            <Card
             src={fortcanning}
             title="History Trills"
             description="Experience the history of Singapore with a guided tour at Fort Canning Park"
             price="$20/session"
             />
        </NavLink>
        
      </div>
      <div className="home__section">
        <NavLink exact to="/trippackage/DiscoverNewAnimals" onClick={handleClick}>
            <Card
            src={zoo}
            title="Discover new Animals"
            description="Spend a day with a local zoo and learn about Singapore's animals"
            price="$30/entry"
            />
        </NavLink>
        <NavLink exact to="/trippackage/DiscoverNewThings" onClick={handleClick}>
            <Card
            src={bugis}
            title="Discover new Things"
            description="Learn how to make Kuey Lapis at Bugis or learn how to make a currypuff at Chinatown"
            price="$30/session"
            />
        </NavLink>
        <NavLink exact to="/trippackage/PulauUbin" onClick={handleClick}>
            <Card
            src={pulau}
            title="Go on an adventure at Pulau Ubin"
            description="Spend a day at Pulau Ubin and learn about the history of the island"
            price="$2/trip"
            />
        </NavLink>
      </div>
    </div>
  );
}

export default TripPackageHome;
