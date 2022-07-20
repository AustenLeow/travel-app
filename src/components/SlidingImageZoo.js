import SimpleImageSlider from "react-simple-image-slider";
import zoo1 from "../images/zoo1.jpg"
import zoo2 from "../images/zoo2.jpg"
import zoo3 from "../images/zoo3.jpg"
import zoo4 from "../images/zoo4.jpg"
import zoo5 from "../images/zoo5.jpg"
import zoo6 from "../images/zoo6.jpg"

const images = [
  { url: zoo1 },
  { url: zoo2 },
  { url: zoo3 },
  { url: zoo4 },
  { url: zoo5 },
  { url: zoo6 },
];

const SlidingImageZoo = () => {
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

export default SlidingImageZoo;