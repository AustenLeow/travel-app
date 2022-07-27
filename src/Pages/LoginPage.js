import React, { useState, useContext } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import wanderlust from "./../images/Wanderlust.jpg";
import { AccountContext } from "../components/cognito-api/Account"
import Status from "../components/cognito-api/Status"


function LoginPage(props) {
  const url = "heap-travelapp.herokuapp.com/api/v1/user";

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { authenticate } = useContext(AccountContext)
  

  const submit = (e) => {
    e.preventDefault();

    authenticate(email, password).then(data => {
      console.log("Logged In!", data, data.tokens.accessToken)
      navigate('/');
      localStorage.clear()
      localStorage.setItem("Token", data.tokens.accessToken)
    }).catch(err => {
      alert("Invalid username/password!");
      console.error(err);
    })

  }

  return (
    <div className="LoginPage-Main">
      <Header />
      <br></br>
      <Status/>
      <form onSubmit={submit}>
        <div className="LoginPage-Main-1">
          <label htmlFor="Useremail">Email:</label>
          <input
            type="text"
            // placeholder="st@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="LoginPage-Main-2">
          <label htmlFor="Userpassword">Password:</label>
          <input
            type="text"
            // placeholder="smartest man alive"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="LoginPage-Submition">
          <button className="Login">
            Log in
          </button>
          <h3 className="LoginQuestion">Don't have an account?</h3>
          <button className="Signup" onClick={() => navigate("../signup")}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
