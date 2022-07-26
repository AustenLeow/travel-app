import SimpleImageSlider from "react-simple-image-slider";
import fortcanning1 from "../images/fortcanning1.jpg"
import fortcanning2 from "../images/fortcanning2.jpg"
import fortcanning3 from "../images/fortcanning3.jpg"
import fortcanning4 from "../images/fortcanning4.jpg"
import fortcanning5 from "../images/fortcanning5.jpg"
import fortcanning6 from "../images/fortcanning6.jpg"
import axios from "axios";

const images = [
  { url: fortcanning1 },
  { url: fortcanning2 },
  { url: fortcanning3 },
  { url: fortcanning4 },
  { url: fortcanning5 },
  { url: fortcanning6 },
];



const SlidingImageHistoryThrills = () => {


  function sendcart(){
    const token =localStorage.getItem("Token")
    const config = {
      headers: {
        Authorization: `Bearer ${token}`} 
      }
  
      const iJSON =  {
        "tripCode": "History",
        "tripCountry": "Singapore",
        "tripDuration": 2,
        "tripItemsList": [
          {
            "tripItemDays": 1,
            "tripItemDescription": "Fort Canning Park",
            "tripItemId": 2,
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
      <p><button className = "button" onClick={sendcart}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageHistoryThrills;