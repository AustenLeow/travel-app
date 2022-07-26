import React, {useState} from "react";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card"
import TripsHome from "../components/TripsHome"
import Axios from "axios";

function TripsPages(props) {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        
      </div>
      <TripsHome />
    </div>
  );
}

export default TripsPages;