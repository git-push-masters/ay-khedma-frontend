import React from "react";
import "./mostPopularWorker.scss";
import Unkown from "../../../assests/imgs/Rectangle 58.png";
import star from "../../../assests/star.svg";
import location from "../../../assests/locationProfile.svg";
import mail from "../../../assests/mailProfile (2).svg";
import contact from "../../../assests/phoneProfile.svg";
const MostPopularWorker = () => {
  return (
    <div className='mostPopularWorker'>
      <div className='mostPopularWorkerRight'>
        <div className='rightMostPopularWorkerRight'>
          <img src={Unkown} alt='' />
        </div>
        <div className='leftMostPopularWorkerRight'>
          <div className='texts'>
            <h2 className='name'>سيف سويلم</h2>
            <p className='desc'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className='rating'>
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
            <img src={star} alt='' />
          </div>
        </div>
      </div>
      <div className='mostPopularWorkerLeft'>
        <h1 className='title'>تفاصيل</h1>
        <div className='item'>
          <img src={mail} alt='' />
          <p>seif3264@gmail.com</p>
        </div>
        <div className='item'>
          <img src={contact} alt='' />
          <p>+20 1256 1324 6</p>
        </div>
        <div className='item'>
          <img src={location} alt='' />
          <p>الدقهلية , ميت غمر عمارة 6 , شقة 14</p>
        </div>
        <button className='btn'>تواصل</button>
      </div>
    </div>
  );
};

export default MostPopularWorker;
