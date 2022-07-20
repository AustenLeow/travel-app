import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import wanderlust from "./../images/Wanderlust.jpg";


function LoginPage(props) {
  const url = "heap-travelapp.herokuapp.com/api/v1/user";

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  function sumbit(e) {
    e.preventDefault();
    try {
      const resp = Axios.post(url, {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="LoginPage-Main">
      <Header />
      <br></br>
      <div className="LoginPage-Main-1">
        <label htmlFor="Useremail">Email:</label>
        <input
          type="text"
          placeholder="austenleow@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="LoginPage-Main-2">
        <label htmlFor="Userpassword">Password:</label>
        <input
          type="text"
          placeholder="smartest man alive"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="LoginPage-Submition">
        <button className="Login" onSubmit={(e) => sumbit(e)}>
          Log in
        </button>
        <h3 className="LoginQuestion">Don't have an account?</h3>
        <button className="Signup" onClick={() => navigate("../signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
