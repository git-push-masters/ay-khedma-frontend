import React from "react";
import "./sliderImage.scss";
import { Carousel } from "3d-react-carousal";
import img1 from "../../../assests/imgs/Group 141.png";
import img2 from "../../../assests/imgs/Group 142.png";
import img3 from "../../../assests/imgs/Group 143.png";
let slides = [
  <img src={img2} alt='3' />,
  <img src={img1} alt='2' />,

  <img src={img3} alt='4' />,
];
const callback = function (index) {
  // console.log("callback", index);
};
const SliderImage = () => {
  return (
    <div className='sliderImageConatiner'>
      <Carousel
        slides={slides}
        autoplay={true}
        interval={2000}
        onSlideChange={callback}
        arrows={false}
      />
    </div>
  );
};

export default SliderImage;
