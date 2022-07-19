import SimpleImageSlider from "react-simple-image-slider";
import bugis1 from "../images/bugis1.jpg"
import bugis2 from "../images/bugis2.jpg"
import bugis3 from "../images/bugis3.jpg"
import chinatown1 from "../images/chinatown1.jpg"
import chinatown2 from "../images/chinatown2.jpg"
import chinatown3 from "../images/chinatown3.jpg"

const images = [
  { url: bugis1 },
  { url: bugis2 },
  { url: bugis3 },
  { url: chinatown1 },
  { url: chinatown2 },
  { url: chinatown3 },
];

const SlidingImageDiscover = (props) => {
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
      <p><button class = "button" onClick={onAdd}>Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageDiscover;