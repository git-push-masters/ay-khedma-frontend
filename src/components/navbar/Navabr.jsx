import React, { useState } from "react";
import "./navbar.scss";
import "../../styles/main.scss";
import Logo from "../../assests/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../rtk/slices/userSlice";
const Navbar = ({ color, logoprop }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className='container'>
      <div className=' navbar' style={{ color: color }}>
        <div className='navbarright'>
          {user ? (
            <span onClick={handleLogOut}>تسجيل الخروج</span>
          ) : (
            <span>
              <Link style={{ color: color }} to='/login'>
                تسجيل الدخول
              </Link>
            </span>
          )}
        </div>
        <div className='navbarMidle'>
          <ul>
            <li>
              <Link style={{ color: color }} to='/home'>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link style={{ color: color }} to='/service'>
                الخدمات
              </Link>
            </li>
            <li>
              <Link style={{ color: color }} to='/profile'>
                حسابي
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbarLeft'>
          <img className='navbarLogo' src={logoprop ? logoprop : Logo} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
