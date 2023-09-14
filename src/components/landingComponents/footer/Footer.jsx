import React from "react";
import "./footer.scss";
import Logo from "../../../assests/logo.svg";
import facebook from "../../../assests/facebook.svg";
import mail from "../../../assests/mail.svg";
import insta from "../../../assests/insta.svg";
import twiter from "../../../assests/twiter.svg";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='top'>
          <div className='text1'>
            {" "}
            <p>خليك دايمًا متواصل معانا عشان يوصلك كل جديد!</p>
          </div>
          <div className='text2'>
            {" "}
            <p>
              م متن ساختگی با تولید سادگی نامفهوم از صن لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است.
            </p>
          </div>
          <div className='inputContainer'>
            <div className='button'>
              <button>اشتراك</button>
            </div>
            <div className='input'>
              <input type='text' placeholder='الايميل...' />
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='right'>
            <div className='logo'>
              <img src={Logo} alt='' />
            </div>
            <p>
              م متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است. چاپگرها و متون بلکه لورم ایپسوم متن ساختگی با
              تولید سادگی نامفهوم از ص
            </p>
            <div className='icons'>
              <img src={facebook} alt='' />
              <img src={twiter} alt='' />
              <img src={insta} alt='' />
              <img src={mail} alt='' />
            </div>
          </div>
          <div className='left'>
            <div className='ul ul1'>
              <h3>Legal</h3>
              <ul>
                <li>Terms</li>
                <li>privacy</li>
                <li>cookies</li>
                <li>License</li>
              </ul>
            </div>
            <div className='ul ul2'>
              <h3>Company</h3>
              <ul>
                <li>Terms</li>
                <li>About Us</li>
                <li>services</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
