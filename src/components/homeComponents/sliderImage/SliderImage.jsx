import React from "react";
import "./sliderImage.scss";
import img1 from "../../../assests/imgs/Group 141.png";
import img2 from "../../../assests/imgs/Group 142.png";
import img3 from "../../../assests/imgs/Group 143.png";
const SliderImage = () => {
  return (
    <div className='sliderImageConatiner'>
      <div id='carouselExample' class='carousel slide'>
        <div class='carousel-inner'>
          <div className='carousel-item active'>
            <img src={img1} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={img2} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={img3} className='d-block w-100' alt='.../' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default SliderImage;
