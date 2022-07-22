import SimpleImageSlider from "react-simple-image-slider";
import family1 from "../images/family1.jpg"
import family2 from "../images/family2.jpg"
import family3 from "../images/family3.jpg"
import family4 from "../images/family4.jpg"
import family5 from "../images/family5.jpg"
import family6 from "../images/family6.jpg"

const images = [
  { url: family1 },
  { url: family2 },
  { url: family3 },
  { url: family4 },
  { url: family5 },
  { url: family6 },
];

const SlidingImageHistoryThrills = (props) => {
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

export default SlidingImageHistoryThrills;