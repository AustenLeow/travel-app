import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageAdventureCove from "../components/SlidingImageAdventureCove";

function TooCoolForSchool(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageAdventureCove />
      </div>
        <h2>Bring your friends from school and enjoy 20% off Aventure Cover at Sentosa</h2>
        <p>Schools' out, funs' in. Make your way down to Sentosa and have a whale of a time at Adventure Cove as you can enjoy the rush of the rapids or choose to chill in the lazy river. Why not enjoy the waves at Spiral Washout. Come now to Adventure Cove and enjoy 20% off your tickets! </p>
      
    </div>
  );
}

export default TooCoolForSchool;