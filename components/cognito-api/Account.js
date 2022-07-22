import React, {createContext} from "react";
import { AuthenticationDetails, CognitoUser, Cgnito } from "amazon-cognito-identity-js";
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
            resolve(session)
          }
        });
      }
      else {
        reject();
      }}) 
  }

  const confirmCode = (user, Username, Password) => {
    const code = prompt("Please enter ur verification code")
    user.confirmRegistration(code)
    authenticate(Username, Password)
  }

  const authenticate = async (Username, Password) => {
    return await new Promise ((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool
      })
  
      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      })
  
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess: ", data)
          resolve(data)
        },
        onFailure: (err) => {
          if (err.toString().includes("UserNotConfirmedException") ){
            confirmCode(user, Username, Password)
          }
          console.log("onFailure: ", err)
          reject(err)
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data)
          resolve(data)
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
          console.log("onSuccess: ", data)
          resolve(data)
        },
        onFailure: (err) => {
          console.error("onFailure: ", err)
          reject(err)
        },
      })
    })  
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }

  }


  return (
    <AccountContext.Provider value={{authenticate, getSession, signUp}}>
      {props.children}
    </AccountContext.Provider>
  )

};

export {Account, AccountContext};