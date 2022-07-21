import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"


function TravelTips(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <li>Covid-19 Tests</li>
        <li>Transport around Singapore</li>
        <li>Events in Singapore this month</li>
        <li>WiFi & SIM cards</li>
        <li>Singapore must-knows</li>
        <li>FAQs</li>
      </div>
    </div>
  );
}

export default TravelTips;