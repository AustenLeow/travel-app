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
        <p>After 2 years of covid, many Singaporeans, including us, have yearned to travel once more. With many tour guides and tour agencies down, many are left with only google to search up on other countries. However, searching for information to settle their travelling logistics can be very daunting and time-consuming. Hence, creating a very troublesome experience for tourists.

          Most online travel planners now mostly require users to go through the long rigorous process of picking their preferred places of travel/stay from a long list of suggestions with ratings. The troublesome process of having to pick and customise the things they want in their short getaway trip, is something they might not have time for due to busy schedules in their work life.
        </p>
        <h1>Our Idea</h1>
        <p>
          Through this app, we hope to simplify this process by providing users with a selection of fixed itineraries, which they can personalise by checking the things they want.
        </p>
      </div>
    </div>
  );
}

export default About;