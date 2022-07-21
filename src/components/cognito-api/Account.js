import React, {useState,createContext} from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import Pool from "./UserPool";

const AccountContext = createContext();

const Account = (props) => {

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user){
        user.getSession((err, session) => {
          if (err){
            reject();
          }
          else {
            resolve(session);
          }
        });
      }
      else {
        reject();
      }}) 
  }

  const confirmCode = (user, Username, Password) => {
    const code = prompt("Please enter your verification code")
    user.confirmRegistration(code)
    authenticate(Username, Password);
  }

  const authenticate = async (Username, Password) => {
    return await new Promise ((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool
      });
  
      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });
  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          // resolve(data.getIdToken().getJwtToken());   // jwt id token is here
          const tokens = {
            accessToken: data.getAccessToken().getJwtToken(),
            idToken: data.getIdToken().getJwtToken(),
            refreshToken: data.getRefreshToken().getToken()
          };
          user['tokens'] = tokens;
          console.log(user);
          setToken(data.getIdToken().getJwtToken());
          resolve(user);
        },
        onFailure: (err) => {
          if (err.toString().includes("UserNotConfirmedException") ){
            confirmCode(user, Username, Password);
          }
          console.log("onFailure: ", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        }
      })
    })
  }
  
  const signUp = async (email, password) => {
    return await new Promise ((resolve, reject) => {
      Pool.signUp(email, password, [], null, (err, data) => {
     
        if (err) {
          console.log(err)
        }
        console.log(data)
      }, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data);
          alert("Success! Go and login now!");
          setToken(data.getIdToken().getJwtToken());
          resolve(data);
        },
        onFailure: (err) => {
          console.error("onFailure: ", err)
          reject(err)
        },
      })
    })  
  };

  let initialToken;
  if (authenticate) {
    initialToken = authenticate;
  } 
  // if (signUp) {
  //   initialToken = signUp;
  // }
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;
  // console.log(token);

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
    setToken(null);
  }

  return (
    <AccountContext.Provider value={{authenticate, getSession, signUp, logout, isLoggedIn}}>
      {props.children}
    </AccountContext.Provider>
  )

};

export {Account, AccountContext};