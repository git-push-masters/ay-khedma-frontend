import React from "react";
import "./section2.scss";
import Done from "../../../assests/Done.svg";
import SpechialButton from "../../specialButton/SpechialButton";
const Section2 = () => {
  return (
    <div className='section2Container'>
      <div className='right'>
        <div className='texts'>
          <h1>
            متخصصين جاهزين <br /> لخدماتك المنزلية!
          </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان
          </p>
        </div>
        <div className='works'>
          <ul>
            <li>
              <img src={Done} alt='' /> <p>سباكه</p>
            </li>
            <li>
              <img src={Done} alt='' /> <p>اسعار مناسبه</p>
            </li>
            <li>
              <img src={Done} alt='' /> <p>حلول مختلفه</p>
            </li>
            <li>
              <img src={Done} alt='' /> <p>وصول سريع</p>
            </li>
            <li>
              <img src={Done} alt='' /> <p>ضمان</p>
            </li>
            <li>
              <img src={Done} alt='' /> <p>اعمال منزليه</p>
            </li>
          </ul>
        </div>
        <SpechialButton text='تواصل معنا الان!' />
      </div>
      <div className='left'>
        <div className='rectangle rectangle1'></div>
        <div className='rectangle rectangle2'></div>
      </div>
    </div>
  );
};

export default Section2;
