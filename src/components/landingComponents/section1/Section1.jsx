import React from "react";
import "./section1.scss";
import Navbar from "../../navbar/Navabr";
import Logo from "../../../assests/logoBlack.svg";
import icon1 from "../../../assests/imgs/Icon.png";
import icon2 from "../../../assests/imgs/Icon (1).png";
import icon3 from "../../../assests/imgs/Icon (2).png";
import icon4 from "../../../assests/imgs/Icon (3).png";
import Box from "../box/Box";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const navigate = useNavigate();

  return (
    <div className='section1'>
      <Navbar logoprop={Logo} color='black' />
      <div className='section1Cintainer'>
        <div className='right'>
          <div className='texts'>
            <h1>
              محتاج تحسيـن <br /> أو تصليح لحاجة <br />
              في بيتك ؟
            </h1>
            <p>احنا نقدر نساعدك!</p>
          </div>
          <div className='auth'>
            <button
              className='landingButton'
              onClick={() => navigate("/register")}
            >
              سجل الان!
            </button>
            <p>
              لديك حساب بالفعل؟{" "}
              <span onClick={() => navigate("/login")}>تسجيل الدخول</span>
            </p>
          </div>
        </div>
        <div className='left'></div>
      </div>
      <div className='boxsContainer'>
        <div className='boxs'>
          {" "}
          <Box icon={icon1} text={"مواعيد مرنة"} />
          <Box icon={icon2} text={"متوفرين في  كل مكان"} />
          <Box icon={icon3} text={" خدمة علي مدار اليوم"} />
          <Box icon={icon4} text={" ضمان علي جودة الخدمة"} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
