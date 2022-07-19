import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import data from '../data';

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

    return (
      <div className="App">
        <Header />
        <h2>Cart Items</h2>
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
      
    );
  }
  
  export default Cart;
  