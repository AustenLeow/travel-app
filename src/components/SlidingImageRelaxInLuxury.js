import SimpleImageSlider from "react-simple-image-slider";
import spa1 from "../images/spa1.jpg"
import spa2 from "../images/spa2.jpg"
import spa3 from "../images/spa3.jpg"
import spa4 from "../images/spa4.jpg"
import spa5 from "../images/spa5.jpg"
import spa6 from "../images/spa6.jpg"
import axios from "axios";

const images = [
  { url: spa1 },
  { url: spa2 },
  { url: spa3 },
  { url: spa4 },
  { url: spa5 },
  { url: spa6 },
];

const SlidingImageRelaxInLuxury = () => {

  function sendcart(){
    const token =localStorage.getItem("Token")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`} 
      }
  
      const iJSON =  ({
        "premadeTripItems": [
          {
            "tripItemDays": 1,
            "tripItemDescription": "string",
            "tripItemId": 10,
            "tripItemTime": "21:12:00"
          }
        ],
        "tripCode": "Spa",
        "tripCountry": "Singapore",
        "tripDuration": 1,
        "tripItemsList": [
          {
            "tripItemDays": 1,
            "tripItemDescription": "string",
            "tripItemId": 10,
            "tripItemTime": "21:12:00"
          }
        ],
        "tripName": "string"
      });
  
      axios.post(
        `/api/v1/premadetrip`, 
        iJSON,config
      ).then(data => console.log(data.data)).catch((error) => {
        console.log(error);
    })
  
      }

  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <p><button className = "button" onClick={sendcart}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageRelaxInLuxury;