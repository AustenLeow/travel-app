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
        <li>Welcome to Travel Tips!</li>
        <li>This is a website that will help you find the best trip for you!</li>
        <li>You can search for a trip by city, or by trip type.</li>
      </div>
    </div>
  );
}

export default TravelTips;