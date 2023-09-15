import React, { useEffect, useRef, useState } from "react";
import "./SliderWork.scss";
import Slider from "react-slick";
import SlideWork from "../slideWork/SlideWork";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Icon1 from "../../../assests/sliderWork/Ic-Plumbing-Filled.svg";
// import Icon2 from "../../../assests/sliderWork/Ic-Plumbing-Filled2.svg";
// import Icon3 from "../../../assests/sliderWork/Ic-Plumbing-Filled3.svg";
// import Icon4 from "../../../assests/sliderWork/Ic-Plumbing-Filled4.svg";
// import Icon5 from "../../../assests/sliderWork/Ic-Plumbing-Filled5.svg";
import { setCurrentSection } from "../../../rtk/slices/sectionSlice";
import axiosInstsnce from "../../../configs/axiosInstanse";
import { useDispatch } from "react-redux";
const SliderWork = () => {
  const [sections, setSections] = useState([]);
  const [sectionId, setSectionId] = useState(1);
  const [sectionName, setSectionName] = useState("");
  const section = {
    name: sectionName,
    sectionId: sectionId,
  };
  useEffect(() => {
    const getSections = async () => {
      try {
        const res = await axiosInstsnce.get("/sections");
        console.log(res.data);
        setSections(res.data.body);
      } catch (e) {}
    };
    getSections();
  }, []);
  // const slides = [
  //   { id: 120, img: Icon1, title: "خدمات النجارة" },
  //   { id: 2, img: Icon2, title: "خدمات تقنية " },
  //   { id: 3, img: Icon3, title: "خدمات السباكة " },
  //   { id: 4, img: Icon4, title: "خدمات منزلية " },
  //   { id: 5, img: Icon5, title: "خدمات الحدائق " },
  //   { id: 6, img: Icon5, title: "خدمات الحدائق " },
  //   { id: 7, img: Icon5, title: "خدمات الحدائق " },
  // ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (index) => {
      setSectionId(sections[index].id);
      setSectionName(sections[index].name);
    },
  };
  const arrowRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentSection(section));
  }, [sectionId]);
  return (
    <div className='sliderWork'>
      <Slider ref={arrowRef} {...settings}>
        {sections.map((slide) => (
          <SlideWork
            key={slide.id}
            Icon={axiosInstsnce.getUri() + slide.icon}
            title={slide.name}
          />
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
