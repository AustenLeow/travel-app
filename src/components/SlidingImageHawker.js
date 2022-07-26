import SimpleImageSlider from "react-simple-image-slider";
import hawker1 from "../images/hawker1.jpg"
import hawker2 from "../images/hawker2.jpg"
import hawker4 from "../images/hawker4.jpg"
import hawker5 from "../images/hawker5.jpg"
import hawker6 from "../images/hawker6.jpg"

const images = [
  { url: hawker1 },
  { url: hawker2 },
  { url: hawker4 },
  { url: hawker5 },
  { url: hawker6 },
];

const SlidingImageHawker = (props) => {
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

export default SlidingImageHawker;