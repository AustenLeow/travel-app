import SimpleImageSlider from "react-simple-image-slider";
import ubin1 from "../images/ubin1.jpg"
import ubin2 from "../images/ubin2.jpg"
import ubin3 from "../images/ubin3.jpg"
import ubin4 from "../images/ubin4.jpg"
import ubin5 from "../images/ubin5.jpg"
import ubin6 from "../images/ubin6.jpg"
import axios from "axios"

const images = [
  { url: ubin1 },
  { url: ubin2 },
  { url: ubin3 },
  { url: ubin4 },
  { url: ubin5 },
  { url: ubin6 },
];

const SlidingImagePulauUbin = () => {

  function sendcart(){
    const token =localStorage.getItem("Token")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`} 
      }
  
      const iJSON =  {
        "tripCode": "Pulau",
        "tripCountry": "Singapore",
        "tripDuration": 5,
        "tripItemsList": [
          {
            "tripItemDays": 1,
            "tripItemDescription": "Discover Ubin,Singapore",
            "tripItemId": 1,
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
      <p><button className = "button">Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImagePulauUbin;