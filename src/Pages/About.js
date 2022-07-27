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
        <h1>Our story</h1>
        <p>After 2 years of covid, many people, including us, have yearned to travel once more. With many tour guides and tour agencies down, many are left with only google to search up on other countries. However, searching for information to settle their travelling logistics can be very daunting and time-consuming. Hence, creating a very troublesome experience for tourists.

          Most online travel planners now mostly require users to go through the long rigorous process of picking their preferred places of travel/stay from a long list of suggestions with ratings. The troublesome process of having to pick and customise the things they want in their short getaway trip, is something they might not have time for due to busy schedules in their work life.
        </p>
        <h1>Our idea</h1>
        <p>
          Through this app, we hope to simplify the above-mentioned process by providing local tourists with a selection of premade itinerary bundles and tour guides. This means they can just fully focus on having a wonderful holiday experience without worrying about the need to plan their trips beforehand. At the same time, this initiative can help to revive Singapore's tourism industry by providing tour guides or businesses with a chance to feature their services here.
        </p>
        <h1>Contact us</h1>
        <p>
          If you are a business looking to get collaborate with us or get featured on this website, please do not hesitate to email us <u>wanderlust@outlook.com.sg</u>.
          Any feedback on this webpage is welcomed via email too!
        </p>
      </div>
    </div>
  );
}

export default About;