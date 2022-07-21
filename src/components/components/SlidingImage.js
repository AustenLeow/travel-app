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

  const [query, setQuery] = useState("");


  function sendcart(){
  const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiZjNhZDUyYzQtNTQ5ZS00NTdjLWFiMmItN2Y0ZGM2OTJlODY5IiwiZXZlbnRfaWQiOiI5MmZkOTI0NC1hNTMwLTQzMzgtYmMzMC1jODg5Mzc5YWFlMzEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzcxOTEyLCJleHAiOjE2NTgzNzU1MTIsImlhdCI6MTY1ODM3MTkxMiwianRpIjoiMmU4ZTQwNTAtN2E5OC00MDNiLWE5ZjQtMGI0NzFkY2JmNWFhIiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.IW7R70K4JH027eqQhjAxfnpeRAsSzG3tJm4zIO1s0FtkVMx6sPalKnILpqXMiM6NqlHKXUBqeqUKE6BIH6KNFvjL27pCPJzDAsEOGDzH3PkMSUCRO83t3wptI9R68n7F1V-klvPPsMmauZkSPowgcDSNVaAPLoQqoHdS0QqVlXkrtbCqnAPPNMQAGTipjsAc3xR6aMXnBRzd8zGKd5q81PrYGGjpIpSDKXO79AHIvb19ec9QRoa4T3T1xAJPwelrzOr9sRfl0KMaz10EMkDzy44L71DbEMsi2rdbmzV4JZiIZ2_OBWx-P6JkzYvYI70y8_vQL7ZaCcNG9aUhMDtFFA"
  const config = {
    headers: {
      Authorization: `Bearer ${token}`} 
    }

    const iJSON =  {
      "tripCode": "Marina",
      "tripCountry": "Singapore",
      "tripDuration": 2,
      "tripItemsList": [
        {
          "tripItemDays": 1,
          "tripItemDescription": "Sail around Singapore",
          "tripItemId": 1,
          "tripItemTime": "20:00:00"
        }
      ],
      "tripName": "string"
    };

    axios.post(
      `/api/v1/premadetrip`, 
      iJSON,config
    ).then(data => console.log(data.data)).catch((error) => {
      console.log(error);
  })

    }

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
    <p><button className = "button" onClick={sendcart}>Add to Cart 🛒</button></p>
    </div>
  );
};

export default SlidingImage;