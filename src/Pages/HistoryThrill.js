import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageHistoryThrills from "../components/SlidingImageHistoryThrills";

function MarinaExperience(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageHistoryThrills />
      </div>
      <h2>Take a tour down memory lane and learn more about the history of Fort Canning Park</h2>
      <h3>Learn more about the history of Fort Canning Park and its importance during the second world war. Immerse yourself as Fort Canning Park brings history to you by recreating the moment when the British surrdendered to the Japanese or enjoy one of the performance at NParks Concert Series in Fort Cannning Park.</h3>
    </div>
  );
}

export default MarinaExperience;