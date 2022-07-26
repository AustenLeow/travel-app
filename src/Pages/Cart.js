import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import data from "../data";
import axios from "axios";
import { CartProvider, useCart } from "react-use-cart";
import { AccountContext } from "../components/cognito-api/Account";
import Status from "../components/cognito-api/Status";


function Cart(props) {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Marina",
      price: 200,
      quantity: 1,
      valid: false,
    },
    {
      id: 2,
      name: "History",
      price: 20,
      quantity: 1,
      valid: false,
    },
    {
      id: 3,
      name: "Zoo",
      price: 30,
      quantity: 1,
      valid: false,
    },
  ];

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  function get() {
    const token = localStorage.getItem("Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(`/api/v1/premadetrip`, config).then((data) => {
      console.log(data.data);
      localStorage.setItem("Items", data.data);
      // console.log(localStorage.getItem("Items"))
    });

    // const array = localStorage.getItem("Items");
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i].tripCode == "Marina") {
    //     products[0].valid = true;
    //   }

    //   if (array[i].tripCode == "History") {
    //     products[1].valid = true;
    //   }

    //   if (array[i].tripCode == "Zoo") {
    //     products[2].valid = true;
    //   }
    // }
  }

  const options = {
    // passing the client secret obtained from the server
  };

  function getcartitems() {}

  return (
    <div className="App">
      <Header />
      <div className="Cart">
        <h2>Cart Items</h2>
        <button onClick={get}>get cart items</button>
      </div>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <button onClick={() => addItem(p)}>Add to cart</button>
          </div>
        ))}
      </div>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            ${item.price} {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

