import React from "react";
import "./googleAndApple.scss";
import Apple from "../../../assests/apple.svg";
import Google from "../../../assests/google.svg";
const GoogleAndApple = () => {
  return (
    <>
      <div className='horizontalLine'>
        <hr />
        <span>او سجل الدخول عبر</span>
      </div>
      <div className='anotherButtons'>
        <button className='buttonCard'>
          <img src={Apple} />
          Apple
        </button>
        <button className='buttonCard'>
          <img src={Google} />
          Google
        </button>
      </div>
    </>
  );
};

export default GoogleAndApple;
