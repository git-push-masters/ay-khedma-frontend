import React from "react";
import "../rightCard/rightCard.scss";
import Visa from "../../../assests/visa.svg";

const RightCard = ({ type, data }) => {
  return (
    <div className='rightCardConatiner'>
      {type && (
        <div className='credit'>
          <img src={Visa} />
        </div>
      )}
      <h1>تفاصيل الحساب</h1>
      {data.map((item) => (
        <div key={item.col1} className='item'>
          <div className='key'>
            {" "}
            <p>{item.col1}</p>
          </div>
          <div className='value'>
            <p>{item.col2}</p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightCard;
