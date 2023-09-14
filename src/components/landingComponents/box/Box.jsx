import React from "react";
import "../box/box.scss";
const Box = ({ icon, text }) => {
  return (
    <div className='box'>
      <img src={icon} />
      <p>{text}</p>
    </div>
  );
};

export default Box;
