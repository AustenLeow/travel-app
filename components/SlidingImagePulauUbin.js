import SimpleImageSlider from "react-simple-image-slider";
import ubin1 from "../images/ubin1.jpg"
import ubin2 from "../images/ubin2.jpg"
import ubin3 from "../images/ubin3.jpg"
import ubin4 from "../images/ubin4.jpg"
import ubin5 from "../images/ubin5.jpg"
import ubin6 from "../images/ubin6.jpg"

const images = [
  { url: ubin1 },
  { url: ubin2 },
  { url: ubin3 },
  { url: ubin4 },
  { url: ubin5 },
  { url: ubin6 },
];

const SlidingImagePulauUbin = () => {
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