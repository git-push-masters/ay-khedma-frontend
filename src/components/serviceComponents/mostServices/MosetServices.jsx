import React, { useState } from "react";
import "./MostServices.scss";
import img1 from "../../../assests/Ic-repair-Filled.svg";
const MosetServices = ({ img, title, desc }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div
      onClick={handleActive}
      className={active ? "mostServicesCard active " : "mostServicesCard "}
    >
      <div className='icon  '>
        <img className={active ? "img active " : "img "} src={img} alt='' />
      </div>
      <div className={active ? "texts active " : "texts "}>
        <h2> {title}</h2>
        <p>
          {/* تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا
          و متون بلکه */}
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MosetServices;
