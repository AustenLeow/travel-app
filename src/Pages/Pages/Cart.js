import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import data from '../data';
import axios from "axios";

function Cart(props) {
  
    const {products} = data;

    const navigate = useNavigate();
  
    const [query, setQuery] = useState("");

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
      const exist = cartItems.find(x => x.id === product.id);
      if(exist){
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
      }
      else{
        setCartItems([...cartItems, {...products, qty : 1}]);
      }
    }

    function display(data){
      const {products} = data;
      
    }

    function get(){

    const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiZjNhZDUyYzQtNTQ5ZS00NTdjLWFiMmItN2Y0ZGM2OTJlODY5IiwiZXZlbnRfaWQiOiI5MmZkOTI0NC1hNTMwLTQzMzgtYmMzMC1jODg5Mzc5YWFlMzEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzcxOTEyLCJleHAiOjE2NTgzNzU1MTIsImlhdCI6MTY1ODM3MTkxMiwianRpIjoiMmU4ZTQwNTAtN2E5OC00MDNiLWE5ZjQtMGI0NzFkY2JmNWFhIiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.IW7R70K4JH027eqQhjAxfnpeRAsSzG3tJm4zIO1s0FtkVMx6sPalKnILpqXMiM6NqlHKXUBqeqUKE6BIH6KNFvjL27pCPJzDAsEOGDzH3PkMSUCRO83t3wptI9R68n7F1V-klvPPsMmauZkSPowgcDSNVaAPLoQqoHdS0QqVlXkrtbCqnAPPNMQAGTipjsAc3xR6aMXnBRzd8zGKd5q81PrYGGjpIpSDKXO79AHIvb19ec9QRoa4T3T1xAJPwelrzOr9sRfl0KMaz10EMkDzy44L71DbEMsi2rdbmzV4JZiIZ2_OBWx-P6JkzYvYI70y8_vQL7ZaCcNG9aUhMDtFFA"
    const config = {
    headers: {
      Authorization: `Bearer ${token}`} 
    }

    axios.get(
      `/api/v1/premadetrip`,
      config
    ).then(data => console.log(data.data),
    display(data)
    )

    }

    return (
      <div className="App" >
        <Header />
        <div className="Cart">
          <h2 >Cart Items</h2>
          <button onClick={get}>get</button>


          <div>{cartItems.length == 0 && <div>Cart Is Empty</div>}</div>
          {cartItems.map((item) => (
            <div key = {item.id} className = "row">
              <div>{item.name}</div>
              <div>
                <button onClick={() => onAdd(item)} className= "add">
                  +
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
  }
  
  export default Cart;
  