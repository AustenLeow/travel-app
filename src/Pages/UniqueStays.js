import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageUniqueStays from "../components/SlidingImageUniqueStays";

function UniqueStays(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageUniqueStays />
      </div>
      <h2>Immerse yourself in one of Singapore's most unique overnight stays!</h2>
      <p>Ever wondered how it is like to sleep under the stars or staying under the sea? Book a overnight stay with us as we make your dream come true. These hotels are not only unique to Singapore, but some are even the only one in the whole world! Have an experience that you will never forget.</p>
    </div>
  );
}

export default UniqueStays;