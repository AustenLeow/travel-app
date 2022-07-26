import SimpleImageSlider from "react-simple-image-slider";
import zoo1 from "../images/zoo1.jpg"
import zoo2 from "../images/zoo2.jpg"
import zoo3 from "../images/zoo3.jpg"
import zoo4 from "../images/zoo4.jpg"
import zoo5 from "../images/zoo5.jpg"
import zoo6 from "../images/zoo6.jpg"
import axios from "axios";

const images = [
  { url: zoo1 },
  { url: zoo2 },
  { url: zoo3 },
  { url: zoo4 },
  { url: zoo5 },
  { url: zoo6 },
];

const SlidingImageZoo = () => {

  function sendcart(){
    const token =localStorage.getItem("Token")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`} 
      }
  
      const iJSON =  {
        "tripCode": "Zoo",
        "tripCountry": "Singapore",
        "tripDuration": 5,
        "tripItemsList": [
          {
            "tripItemDays": 2,
            "tripItemDescription": "Zoo in Singapore",
            "tripItemId": 3,
            "tripItemTime": "10:00:00"
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

  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <p><button class = "button" onClick={sendcart}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageZoo;