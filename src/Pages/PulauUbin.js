import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImagePulauUbin from "../components/SlidingImagePulauUbin";

function PulauUbin(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImagePulauUbin />
      </div>
        <h2>Enjoy the beaches and the eco-diversity of Pulau Ubin</h2>
        <p>Take a boat from Changi Village and rent a bicycle from a local bicycle rental shop as you enjoy the scenery and the bio-diversity of the animals and plants living there. You can follow the trail as they take you on a path to explore nature's greatest gift all in one island. Lastly, enjoy a freshly cooked meal with herbs and fishes all grown in Pulau Tekong, cooked by a local chef renowed for his stir-fried rice.</p>
    </div>
  );
}

export default PulauUbin;