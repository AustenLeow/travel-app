import SimpleImageSlider from "react-simple-image-slider";
import marinabay1 from "../images/marinabay1.jpg"
import marinabay7 from "../images/marinabay7.jpg"
import marinabay3 from "../images/marinabay3.jpg"
import marinabay4 from "../images/marinabay4.jpg"
import marinabay5 from "../images/marinabay5.jpg"
import marinabay6 from "../images/marinabay6.jpg"

const images = [
  { url: marinabay1 },
  { url: marinabay7 },
  { url: marinabay3 },
  { url: marinabay4 },
  { url: marinabay5 },
  { url: marinabay6 },
];

const SlidingImage = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default SlidingImage;