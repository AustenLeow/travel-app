import SimpleImageSlider from "react-simple-image-slider";
import sentosa1 from "../images/sentosa1.jpg"
import sentosa2 from "../images/sentosa2.jpg"
import sentosa3 from "../images/sentosa3.jpg"
import sentosa4 from "../images/sentosa4.jpg"
import sentosa5 from "../images/sentosa5.jpg"
import sentosa6 from "../images/sentosa6.jpg"
import { useState } from "react";
import { ShoppingCartProvider , useShoppingCart} from "../context/ShoppingCartContext.tsx"

const images = [
  { url: sentosa1 },
  { url: sentosa2 },
  { url: sentosa3 },
  { url: sentosa4 },
  { url: sentosa5 },
  { url: sentosa6 },
];

const SlidingImageChillAtSentosa = (props) => {
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
      <p><button class = "button">Add to Cart 🛒</button></p>
    </div>
  );
}

export default SlidingImageChillAtSentosa;