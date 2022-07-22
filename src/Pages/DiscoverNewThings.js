import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageDiscover from "../components/SlidingImageDiscover";
import axios from "axios"

function DiscoverNewThings(props) {

  

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageDiscover />
      </div>
      <h2>Head to historical sites in Bugis and Chinatown to learn and discover new things</h2>
      <p>Head to bugis to learn how to make Kueh Lapis. Kueh lapis is an Indonesian kueh, or a traditional snack of steamed colourful layered soft rice flour pudding. In Indonesian lapis means "layers". This steamed layered sticky rice cake or pudding is quite popular in Indonesia. Also, you could try your head at making Yong Tau Foo from scratch at Chinatown. Yong Tau Foo is a Hakka Chinese dish consisting primarily of tofu filled with ground meat mixture or fish paste. Variation of this food include vegetables and mushrooms stuffed with ground meat or surimi. Yong tau foo is eaten in numerous ways, either dry with a sauce or served as a soup dish.</p>
    </div>
  );
}

export default DiscoverNewThings;