import React, { useState } from "react";
import "./profile.scss";
import Navbar from "../../components/navbar/Navabr";
import RightCard from "../../components/profileComponents/rightCard/RightCard";
import Unkown from "../../assests/imgs/Rectangle 58.png";
import mail from "../../assests/mailProfile (2).svg";
import phone from "../../assests/phoneProfile.svg";
import location from "../../assests/locationProfile.svg";
import Footer from "../../components/landingComponents/footer/Footer";
import Search from "../../components/profileComponents/Search/Search";
const data1 = [
  {
    col1: "الاسم الاول",
    col2: "سيف",
  },
  {
    col1: "الاسم الاخير",
    col2: " سويلم",
  },
  {
    col1: " السن",
    col2: " 21",
  },
  {
    col1: " النوع",
    col2: " مهندس",
  },
];
const data2 = [
  {
    col1: "دوله ",
    col2: "مصر",
  },
  {
    col1: "محافظه ",
    col2: " الدقهليه",
  },
  {
    col1: " مدينه",
    col2: "  ميت غمر",
  },
  {
    col1: " شارع",
    col2: " شارع الجيش",
  },
];
const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='profileConyainer'>
      <div className='navbarConatiner'>
        <Navbar />
        <h1 className='title'>الحساب</h1>
      </div>
      <div className='contentContainer'>
        <div className='right'>
          <div className='accountCard'>
            <img src={Unkown} alt='' />
            <div className='who'>
              <h1>سيف سويلم</h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className='connectionDetails'>
              <div className='item'>
                <img src={mail} alt='' className='icon' />
                <p> seif1234@gmail.com</p>
              </div>
              <div className='item'>
                <img src={phone} alt='' className='icon' />
                <p> +20 0101634</p>
              </div>
              <div className='item'>
                <img src={location} alt='' className='icon' />
                <p> الدقهلية , ميت غمر , شارع الجيش عمارة 6 , شقة 14</p>
              </div>
            </div>
          </div>
          <button className='profileBtn btn1'>طلب خدمه جديده</button>
          <button className='profileBtn btn2'>تعديل الحساب</button>
        </div>
        <div className='left'>
          <RightCard type='credit' data={data1} />
          <RightCard data={data1} />
          <RightCard data={data2} />
        </div>
      </div>
      <Footer />
      {open && <Search />}
    </div>
  );
};

export default Profile;
