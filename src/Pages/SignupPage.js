import React, { useContext, useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import UserPool from "../components/cognito-api/UserPool";
import { AccountContext } from "../components/cognito-api/Account";

function SignupPage() {
  const url = "heap-travelapp.herokuapp.com/api/v1/user";

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {signUp} = useContext(AccountContext)

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout");
  };

  const submit = (e) => {
    e.preventDefault();
    signUp(email, password)
    // try {
    //   const resp = Axios.post(url, {
    //     email: email,
    //     password: password,
    //   });
    // } catch (error) {
    //   console.log(error.response);
    // }
    
  }

  return (
    <div className="LoginPage-Main">
      <Header />
      <br></br>
      <form onSubmit={submit}>
        <div className="LoginPage-Main-1">
          <label htmlFor="Useremail" >
            Email:
          </label>
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
        <button className="Login" >Sign Up</button>
        <h3 className="LoginQuestion">Already have an account?</h3> 
        <button className="Signup"onClick={() => navigate("../login")}>Log in?</button>
      </form>
    </div>
  );
}

export default SignupPage;