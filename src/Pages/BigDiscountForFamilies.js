import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageBigFamilies from "../components/SlidingImageBigFamilies.js"
import "./BigFamilies.css"



function BigDiscountForFamilies(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageBigFamilies/>
      </div>
      <h2>Big Discount for families up to 50% off attractions</h2>
    </div>
  );
}

export default BigDiscountForFamilies;