import React, { useState } from "react";
import "../requestWork/RequestWork.scss";
import Replace from "../../../assests/imgs/Rectangle 58.png";
import location from "../../../assests/location.svg";
const RequestWork = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className='requestWork'>
      <div className='rightRequestWork'>
        <div className='img'>
          <img src={Replace} alt='' />
        </div>
        <div className='text'>
          <span> 3أشخاص</span> مقدمين للخدمة
        </div>
      </div>
      <div className='leftRequestWork'>
        <div className='TopLeftRequestWork'>
          <div className='rightTopLeftRequestWork'>
            <h1>تصليح حنفية مكسورة من الداخل</h1>
            <p className='date'>18/10/2023</p>
          </div>
          <div className='leftTopLeftRequestWork'>100ج</div>
        </div>
        <div className='middleLeftRequestWork'>
          <div className='icon'>
            <img src={location} alt='' />
            <p className='address'>
              الدقهلية , ميت غمر , شارع الجيش عمارة 6 , شقة 14
            </p>
          </div>
          <div className='desc'>
            لوريم أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو تيمبور ينسشمع لش
            مع يمن بخس
          </div>
        </div>
        <div className='bottomLeftRequestWork'>
          <button className='btn right'>تفاصيل أكثر</button>
          <button className='btn left'>تواصل</button>
        </div>
      </div>
    </div>
  );
};

export default RequestWork;
