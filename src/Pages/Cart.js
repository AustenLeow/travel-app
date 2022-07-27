import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import data from "../data";
import axios from "axios";
import { CartProvider, useCart } from "react-use-cart";
import { AccountContext } from "../components/cognito-api/Account";
import Status from "../components/cognito-api/Status";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import {PaymentElement} from '@stripe/react-stripe-js';

// const stripePromise = loadStripe("pk_test_GvF3BSyx8RSXMK5yAFhqEd3H");

// const CheckoutForm = () => {
//   return (
//     <form>
//       <PaymentElement />
//       <button>Submit</button>
//     </form>
//   );
// };

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
    {
      id: 4,
      name: "Discover",
      price: 30,
      quantity: 1,
      valid: false,
    },
    {
      id: 5,
      name: "Pulau",
      price: 30,
      quantity: 1,
      valid: false,
    },
  ];

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

    

    function delmarina(){
      const token = localStorage.getItem("Token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios.delete(`/api/v1/premadetrip/Marina`, config).then((data) => {
        console.log(data.data);
        // localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });

      axios.delete(`/api/v1/premadetrip/History`, config).then((data) => {
        console.log(data.data);
        // localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });

      axios.delete(`/api/v1/premadetrip/Zoo`, config).then((data) => {
        console.log(data.data);
        // localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });

      axios.delete(`/api/v1/premadetrip/Pulau`, config).then((data) => {
        console.log(data.data);
        // localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });

      axios.delete(`/api/v1/premadetrip/Discover`, config).then((data) => {
        console.log(data.data);
        // localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });
    }

    function checkout() {
      const token = localStorage.getItem("Token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios.post(`/api/v1/premadetrip`, config).then((data) => {
        console.log(data.data);
        localStorage.setItem("Items", data.data);
        // console.log(localStorage.getItem("Items"))
      });
    }

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


  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: "{{CLIENT_SECRET}}",
  // };

  function getcartitems() {}

  return (
    <div className="App">
      <Header />
      <div className="cartbox">
      <div className="Cart">
        <h2>Recommendations</h2>
        {/* <button onClick={get}>get cart items</button> */}
      </div>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <button onClick={() => addItem(p)}>Add to cart {p.name}</button>
          </div>
        ))}
      </div>
      <h2>Cart 🛒 ({totalUniqueItems})</h2>

      <ul className="listgroup">
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} : ${item.price * item.quantity} &nbsp;
            <button className="cartbtn"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="cartbtn"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="cartbtn" onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <button className="cartbtn" onClick={delmarina}> delete all</button>
      <button className="cartbtn" onClick={checkout}>check out</button>


      {/* <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements> */}
      </div>
    </div>
  );
}

export default Cart;