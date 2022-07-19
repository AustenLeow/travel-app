import SimpleImageSlider from "react-simple-image-slider";
import unique1 from "../images/unique1.jpg"
import unique2 from "../images/unique2.jpg"
import unique3 from "../images/unique3.jpg"
import unique4 from "../images/unique4.jpg"
import unique6 from "../images/unique6.jpg"

const images = [
  { url: unique1 },
  { url: unique2 },
  { url: unique4 },
  { url: unique6 },
];

const SlidingImageUniqueStays = () => {
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

export default SlidingImageUniqueStays;