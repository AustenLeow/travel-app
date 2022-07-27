import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageChillAtSentosa from "../components/SlidingImageChillAtSentosa";
import "./Pages.css";

function MarinaExperience(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageChillAtSentosa />
      </div>
      <h2>Enjoy the serenity and tranquility of Sentosa's beaches or participate in some thrilling activites in Sentosa.</h2>
      <p>Take a stroll down one of these man-made beaches and soak in the tropical island's sunlight. One can take part in stand-up paddling,
        rent jet-skis and even experience a banana-boat ride. Take a few stops away from the beaches via Sentosa's very own trams and one would reach
        Adventure Cove. One can try the thrilling, adrenaline-gushing water slides in Adventure Cove or float through their
        Lazy River to relax and seek refuge from Singapore's heat. Apart from water-related activities, Sentosa's golf course is
        also located nearby. Golf-enthusiasts could rent golf clubs and simply spend the afternoon playing golf.  </p>
    </div>
  );
}

export default MarinaExperience;