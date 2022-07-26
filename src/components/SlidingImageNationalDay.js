import SimpleImageSlider from "react-simple-image-slider";
import NDPD1 from "../images/NDPD1.jpg"
import NDPD2 from "../images/NDPD2.jpg"
import NDPD from "../images/NDPD.jpg"

const images = [
  { url: NDPD1 },
  { url: NDPD2 },
  { url: NDPD },
];

const SlidingImageNationalDay = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <p><button class = "button">Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageNationalDay;