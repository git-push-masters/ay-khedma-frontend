import React, { useRef } from "react";
import "./SliderWork.scss";
import Slider from "react-slick";
import SlideWork from "../slideWork/SlideWork";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Icon1 from "../../../assests/sliderWork/Ic-Plumbing-Filled.svg";
import Icon2 from "../../../assests/sliderWork/Ic-Plumbing-Filled2.svg";
import Icon3 from "../../../assests/sliderWork/Ic-Plumbing-Filled3.svg";
import Icon4 from "../../../assests/sliderWork/Ic-Plumbing-Filled4.svg";
import Icon5 from "../../../assests/sliderWork/Ic-Plumbing-Filled5.svg";
const SliderWork = () => {
  const slides = [
    { id: 1, img: Icon1, title: "خدمات النجارة" },
    { id: 2, img: Icon2, title: "خدمات تقنية " },
    { id: 3, img: Icon3, title: "خدمات السباكة " },
    { id: 4, img: Icon4, title: "خدمات منزلية " },
    { id: 5, img: Icon5, title: "خدمات الحدائق " },
    { id: 6, img: Icon5, title: "خدمات الحدائق " },
    { id: 7, img: Icon5, title: "خدمات الحدائق " },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const arrowRef = useRef();

  return (
    <div className='sliderWork'>
      <Slider ref={arrowRef} {...settings}>
        {slides.map((slide) => (
          <SlideWork key={slide.id} Icon={slide.img} title={slide.title} />
        ))}
      </Slider>
      <button
        className='arrows back'
        onClick={() => arrowRef.current.slickPrev()}
      >
        <ArrowBackIcon />
      </button>
      <button
        className='arrows forward'
        onClick={() => arrowRef.current.slickNext()}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default SliderWork;
