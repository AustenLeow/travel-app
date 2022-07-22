import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import "./traveltips.css"


function TravelTips(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <h1>Covid-19 Tests</h1>

        <h1>Transport around Singapore</h1>

        <h1>Events in Singapore this month</h1>

        <h1>WiFi & SIM cards</h1>

        <h1>Singapore must-knows</h1>

        <h1>Need help?</h1>
        <p>Please do not hesitate to email us <u>wanderlust@outlook.com.sg</u>. Any feedback on this webpage is welcomed via email too!</p>
      </div>
    </div>
  );
}

export default TravelTips;