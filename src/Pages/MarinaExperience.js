import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImage from "../components/SlidingImage";
import Pages from "./Pages.css";
import "./Marina.css";


function MarinaExperience(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImage />
      </div>
      <h2>1 night marina experience in Singapore's Central Business District</h2>
      <p>Enjoy a cool and relaxing night while breezing through Singapore Central Business District in a private boat with your family or friends.</p>
    </div>
  );
}

export default MarinaExperience;