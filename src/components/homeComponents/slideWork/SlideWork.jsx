import React from "react";

import "../slideWork/slideWork.scss";
const SlideWork = ({ Icon, title }) => {
  return (
    <div className='slideWork'>
      <div className='icon'>
        <img src={Icon} alt='' />
      </div>
      <h2> {title}</h2>
    </div>
  );
};

export default SlideWork;
