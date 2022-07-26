import React, { useContext, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import UserPool from "../components/cognito-api/UserPool";
import { AccountContext } from "../components/cognito-api/Account";

function SignupPage() {
  // const url = "heap-travelapp.herokuapp.com/api/v1/user";
  const axios = require('axios');

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {signUp} = useContext(AccountContext);

  // const addNewUser = (data) => {
  //   const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiNzc0YTE1ZTMtZjUxMC00MzZhLWExNTMtNWQ2NjM4MWI2NDE4IiwiZXZlbnRfaWQiOiJmOWNmMDE5Mi0wNmJmLTQ2YjUtYmE2OC00NjU2MTA3YjA0MjYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzI1NjIxLCJleHAiOjE2NTgzMjkyMjEsImlhdCI6MTY1ODMyNTYyMSwianRpIjoiMWY0ZjVkN2ItYmQ1OC00NzQ2LWJiNDQtMjk3MzQ4MGQ3MzQ4IiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.dY2KSi047ulDm8qnxnANw8WDCF2h0vutlw-Qyc1-i3u48mGcO1pQGtX9dYAhb42xtBXx3PdHCJNYNjyDulNEJaC8jX7MarWpgscNCd_gowlhnilqNf--lTFZwtoVZ15nb0uUNfHAQmiD57Eulzoi7IFQQwEkUBNun8O5CxHhyC7R0kLcD6Mok9mrtaQQAoSom2sjhQa34lvCfBPSKN1ViG7pIpyl5tfaMx-Zroxg8VaOUhVdd1bGFcA5mCXDhanoZbzT-SONFAOriaXe4FfSl25Kw7s5P4zxeib8fpwYTYXrPR_XxYUEEkVLjgrROVUhUXpN6vykNv_n0VYTHXR8TQ"
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`} 
  //   }
    
  //   const json = (
  //     {
  //       "userDob": "2022-07-20",
  //       "userEmail": data["user"],
  //       "userFirstName": "string",
  //       "userId": 0,
  //       "userLastName": "string",
  //       "userMobile": "string"
  //     }
  //   );

  //   axios.post(
  //       `/api/v1/user`, 
  //       json, config
  //     ).then(data => console.log(data.data)).catch((error) => {
  //       console.log(error);
  //   });
  // }

  const submit = (e) => {
    e.preventDefault();
    
    signUp(email, password)
    .then(data => {
      console.log("Signed up!", data);
      // addNewUser(data);
      navigate('/login');
      alert("Success! Go and log in now!");
    }).catch(err => {
      alert("Invalid username/password!");
      console.error(err);
    });
    
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