import SimpleImageSlider from "react-simple-image-slider";
import marinabay1 from "../images/marinabay1.jpg"
import marinabay7 from "../images/marinabay7.jpg"
import marinabay3 from "../images/marinabay3.jpg"
import marinabay4 from "../images/marinabay4.jpg"
import marinabay5 from "../images/marinabay5.jpg"
import marinabay6 from "../images/marinabay6.jpg"
import { useState } from "react";
import { ShoppingCartProvider , useShoppingCart} from "../context/ShoppingCartContext.tsx"
import { add, total } from 'cart-localstorage' 
import axios from "axios";

const images = [
  { url: marinabay1 },
  { url: marinabay7 },
  { url: marinabay3 },
  { url: marinabay4 },
  { url: marinabay5 },
  { url: marinabay6 },
];

const SlidingImage = (props) => {
  const {product, onAdd} = props;
  const axios = require('axios');
  
  const { getItemQuantity , increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(1); 
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      {/* <p><button class = "button" onClick={() => add({id: 1, name: "Singapore Marina Experience", price: 200})}>Add to Cart 🛒</button></p> */}
      {/* <p><button className = "button" onClick={() => axios.post("heap-travelapp.herokuapp.com/api/v1/user", [{"email":"soonann.2021@scis.smu.edu.sg","firstName":"Soon Ann","lastName":"Tan","mobile":"91111111","customTripList":[],"doB":null}]).then(function (response) {
    console.log(response);
  })}>Add to Cart 🛒</button></p> */}
    <p><button className = "button" onClick={() => axios.post("https://travel.potatovault.com/api/v1/premadetrip", 
    {
    "premadeTripItems": [
      {
        "tripItemDays": 0,
        "tripItemDescription": "string",
        "tripItemId": 0,
        "tripItemTime": {
          "hour": 0,
          "minute": 0,
          "nano": 0,
          "second": 0
        }
      }
    ],
    "tripCode": "string",
    "tripCountry": "string",
    "tripDuration": 0,
    "tripItemsList": [
      {
        "tripItemDays": 0,
        "tripItemDescription": "string",
        "tripItemId": 0,
        "tripItemTime": {
          "hour": 0,
          "minute": 0,
          "nano": 0,
          "second": 0
        }
      }
    ],
    "tripName": "string"
  }).then(function (response) {
    console.log(response);
    })}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImage;