import SimpleImageSlider from "react-simple-image-slider";
import fortcanning1 from "../images/fortcanning1.jpg"
import fortcanning2 from "../images/fortcanning2.jpg"
import fortcanning3 from "../images/fortcanning3.jpg"
import fortcanning4 from "../images/fortcanning4.jpg"
import fortcanning5 from "../images/fortcanning5.jpg"
import fortcanning6 from "../images/fortcanning6.jpg"

const images = [
  { url: fortcanning1 },
  { url: fortcanning2 },
  { url: fortcanning3 },
  { url: fortcanning4 },
  { url: fortcanning5 },
  { url: fortcanning6 },
];

const SlidingImageHistoryThrills = () => {
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

export default SlidingImageHistoryThrills;