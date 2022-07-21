import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageRelaxInLuxury from "../components/SlidingImageRelaxInLuxury";

function RelaxInLuxury(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageRelaxInLuxury />
        <h2>Enjoy luxurious spa at great discounts when you bring a friend</h2>
        <h3>It is time for you and your friends to reward yourself at the spa after a long day's of work. Relax and recuperate your muscles and mind with massages provided by worldclass masseurs. Add an additional patented herbal oil to your massage to improve your experience at the spa. All these experience will be availble at a 20% discount only in the month of July.</h3>
      </div>
    </div>
  );
}

export default RelaxInLuxury;