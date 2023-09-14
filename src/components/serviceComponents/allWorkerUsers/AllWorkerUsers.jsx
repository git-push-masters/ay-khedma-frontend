import React from "react";
import "./AllWorkerUsers.scss";
import Replace from "../../../assests/imgs/Rectangle 58.png";
import star from "../../../assests/star.svg";
const AllWorkerUsers = () => {
  return (
    <div className='allWorkerUsers'>
      <div className='img'>
        <img src={Replace} alt='' />
      </div>
      <div className='details'>
        <h1 className='name'>سيف سويلم</h1>
        <div className='desc'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </div>
        <div className='rating'>{Array(5).fill(<img src={star} alt='' />)}</div>
      </div>
    </div>
  );
};

export default AllWorkerUsers;
