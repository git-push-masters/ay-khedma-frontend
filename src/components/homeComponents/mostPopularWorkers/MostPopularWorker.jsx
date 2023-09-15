import React from "react";
import "./mostPopularWorker.scss";
import Unkown from "../../../assests/imgs/Rectangle 58.png";
import star from "../../../assests/star.svg";
import location from "../../../assests/locationProfile.svg";
import mail from "../../../assests/mailProfile (2).svg";
import contact from "../../../assests/phoneProfile.svg";
import axiosInstsnce from "../../../configs/axiosInstanse";
const MostPopularWorker = ({ email, name, address, phone, imgUrl }) => {
  return (
    <div className='mostPopularWorker'>
      <div className='mostPopularWorkerRight'>
        <div className='rightMostPopularWorkerRight'>
          <img
            src={imgUrl ? `${axiosInstsnce.getUri() + imgUrl}` : Unkown}
            alt=''
          />
        </div>
        <div className='leftMostPopularWorkerRight'>
          <div className='texts'>
            <h2 className='name'>{name ? name : "لا يوجد اسم"} </h2>
            <p className='desc'>
              {address
                ? address
                : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."}{" "}
            </p>
          </div>
          <div className='rating'>
            {Array(5).fill(<img src={star} alt='' />)}
          </div>
        </div>
      </div>
      <div className='mostPopularWorkerLeft'>
        <h1 className='title'>تفاصيل</h1>
        <div className='item'>
          <img src={mail} alt='' />
          <p>{email ? email : "لا يوجد"}</p>
        </div>
        <div className='item'>
          <img src={contact} alt='' />
          <p>{phone ? phone : "لا يوجد"}</p>
        </div>
        <div className='item'>
          <img src={location} alt='' />
          <p> {address ? address : "لا يوجد"}</p>
        </div>
        <button className='btn'>عرض حسابه</button>
      </div>
    </div>
  );
};

export default MostPopularWorker;
