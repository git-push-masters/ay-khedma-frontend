import React from "react";
import "./sliderImage.scss";
import { Carousel } from "../../../slider/index.js";
import img1 from "../../../assests/imgs/Group 141.png";
import img2 from "../../../assests/imgs/Group 142.png";
import img3 from "../../../assests/imgs/Group 143.png";
let slides = [
  <img src={img2} alt='3' />,
  <img src={img1} alt='2' />,
  <img src={img3} alt='4' />,
];
const callback = function (index) {
  return;
};
const SliderImage = () => {
  return (
    <div className='sliderImageConatiner'>
      <div id='carouselExample' class='carousel slide'>
        <div className='sliderImageConatiner'>
          <Carousel
            slides={slides}
            autoplay={true}
            interval={2000}
            arrows={false}
            oncallback={callback}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
