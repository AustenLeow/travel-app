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
    const token ="eyJraWQiOiI3dXlNa0NuYlp3bDRNNzdLbW13VWpvZlZYRGcxNGhiVWRhU1k4Y0VYOVNnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfTVpiMEN4WnpBIiwiY2xpZW50X2lkIjoiM3VyNWM4amNsZzVpa2k0ajl0dXZvcjVrNzQiLCJvcmlnaW5fanRpIjoiOTIzZWI3YTUtYjY3ZC00ZWE4LTkyNjctNGVhOWUxM2NkNTQ3IiwiZXZlbnRfaWQiOiJmMzAzNGQ0Ni01NzA1LTRiODAtYjIyNi1jMjdkYWM5NDdkN2YiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU4MzI5MzQ2LCJleHAiOjE2NTgzMzI5NDYsImlhdCI6MTY1ODMyOTM0NiwianRpIjoiNWQ2MzliN2YtYWRkNy00NjlkLTkzOTgtODIzNmEyMWE0OWFmIiwidXNlcm5hbWUiOiJiZjAwNTViOS05MDhiLTQxODktYTkyZi05NDgzMTU4YTJkNDUifQ.XpfzCwRJlc-V8Tdncu_1HhNy19uq3uTvZzRvbjedqbuL3lGageVhs0uTLhGrQKVkjQUC_6ZRrbe2oF_Q2Mh0ss9nG9MauwzIbWpYc_1bg9CR1_r2YTiOUA_uJ2vocahTeIltVMb0x8LWwAM9E3M3GzM2WA8Kt84mBhQnMAvReU3hbQwltdtpOFb-QuxWazRV6GsqpxMXM_BuPBroTmKJt_RD5hfvhVQvktY34K-btdVh7ijhMCkAmEoRJsgRsRT3TAvBOPCfY19l8ZlCTwPLF4qNh1Jn0K2iZ6k_7gbwS5G7I2ENqGbHae7GSTkkx-guV-_C6_ekoLadc-AE2Wcvmw"
    const config = {
      headers: {
        Authorization: `Bearer ${token}`} 
      }
  
      const iJSON =  ({
        "premadeTripItems": [
          {
            "tripItemDays": 0,
            "tripItemDescription": "string",
            "tripItemId": 3,
            "tripItemTime": "21:12:00"
          }
        ],
        "tripCode": "Zoo",
        "tripCountry": "Singapore",
        "tripDuration": 3,
        "tripItemsList": [
          {
            "tripItemDays": 1,
            "tripItemDescription": "string",
            "tripItemId": 0,
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
      <p><button class = "button" onClick={sendcart}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageZoo;