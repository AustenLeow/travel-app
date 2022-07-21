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
    const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiZjNhZDUyYzQtNTQ5ZS00NTdjLWFiMmItN2Y0ZGM2OTJlODY5IiwiZXZlbnRfaWQiOiI5MmZkOTI0NC1hNTMwLTQzMzgtYmMzMC1jODg5Mzc5YWFlMzEiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzcxOTEyLCJleHAiOjE2NTgzNzU1MTIsImlhdCI6MTY1ODM3MTkxMiwianRpIjoiMmU4ZTQwNTAtN2E5OC00MDNiLWE5ZjQtMGI0NzFkY2JmNWFhIiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.IW7R70K4JH027eqQhjAxfnpeRAsSzG3tJm4zIO1s0FtkVMx6sPalKnILpqXMiM6NqlHKXUBqeqUKE6BIH6KNFvjL27pCPJzDAsEOGDzH3PkMSUCRO83t3wptI9R68n7F1V-klvPPsMmauZkSPowgcDSNVaAPLoQqoHdS0QqVlXkrtbCqnAPPNMQAGTipjsAc3xR6aMXnBRzd8zGKd5q81PrYGGjpIpSDKXO79AHIvb19ec9QRoa4T3T1xAJPwelrzOr9sRfl0KMaz10EMkDzy44L71DbEMsi2rdbmzV4JZiIZ2_OBWx-P6JkzYvYI70y8_vQL7ZaCcNG9aUhMDtFFA"
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