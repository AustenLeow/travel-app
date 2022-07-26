import SimpleImageSlider from "react-simple-image-slider";
import ac1 from "../images/ac1.jpg"
import ac2 from "../images/ac2.jpg"
import ac3 from "../images/ac3.jpg"
import ac4 from "../images/ac4.jpg"
import ac5 from "../images/ac5.jpg"
import ac6 from "../images/ac6.jpg"

const images = [
  { url: ac1 },
  { url: ac2 },
  { url: ac3 },
  { url: ac4 },
  { url: ac5 },
  { url: ac6 },
];

const SlidingImageAdventureCove = (props) => {
  const {product, onAdd} = props;
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      {/* <p><button class = "button" onClick={onAdd}>Add to Cart 🛒</button></p> */}
    </div>
  );
}

export default SlidingImageAdventureCove;