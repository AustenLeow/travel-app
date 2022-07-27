import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import Home from "../components/Home.js"


function FrontPage(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        
      </div>
      <Home />
    </div>
  );
}

export default FrontPage;
