import React, { useState, useRef, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../store/auth-context'

const AuthForm = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
  
    const authCtx = useContext(AuthContext);
  
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
  
      setIsLoading(true);
      let url;
      if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCgfRxlkuIc3p8RiM_lCXlU2ph2ZAtMOag';
      } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCgfRxlkuIc3p8RiM_lCXlU2ph2ZAtMOag';
      }
  
      fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
  
            throw new Error(errorMessage);
          });
        }
      })
      .then(data => {
        const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/trippackages');
      })
      .catch((err) => {
        alert(err.message);
      });
    };
  
    return (
      <section >
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div >
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div >
            <label htmlFor='password'>Your Password</label>
            <input type='password' id='password' required ref={passwordInputRef} />
          </div>
          <div >
            {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
            {isLoading && <p>Sending request...</p>}
            <button
              type='button'
              
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default AuthForm;