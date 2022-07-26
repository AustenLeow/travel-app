import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageNationalDay from "../components/SlidingImageNationalDay";

function NationalDayDiscount(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageNationalDay />
      </div>
        <h2>Enjoy 10% off all Singapore attraction for the whole month of August</h2>
        <p>Ever tried Singapore's iconic attractions like the Singapore Ferris Wheel or the Singapore Duck Tour? If not this is the best time to try as we are giving out huge discounts for Singapore attractions!</p>
      
    </div>
  );
}

export default NationalDayDiscount;