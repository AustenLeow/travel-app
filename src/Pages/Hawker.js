import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"
import SlidingImageHawker from "../components/SlidingImageHawker";

function Hawker(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="Marina-body">
        <SlidingImageHawker />
        <h2>Discount coupons for big purchases at hawkers</h2>
        <h3>Enjoy discounts on your favorite food like Chili Sting Ray, Satay and Roasted Chicken Wings when you buy $100 or more worth of food here at Newton Food Center. Hurry, while stocks last.</h3>
      </div>
    </div>
  );
}

export default Hawker;