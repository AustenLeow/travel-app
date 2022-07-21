import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageZoo from "../components/SlidingImageZoo";

function Zoo(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageZoo />
      </div>
      <h2>Home to the famous Ah-Meng</h2>
      <h3>Take a trip down to Singapore's very own zoo to meet and interact with various animals ranging from giraffs to night owls. 
      </h3>
    </div>
  );
}

export default Zoo;