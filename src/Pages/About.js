import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"


function About(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <h1>Our Story</h1>
        <h2>Like a summer boyband, 5 boys from SMU decided to make an app to challenge ourselves during our free time.</h2>
      </div>
    </div>
  );
}

export default About;