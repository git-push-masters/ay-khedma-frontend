import React, { useState } from "react";
import "./navbar.scss";
import "../../styles/main.scss";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assests/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { logOut } from "../../rtk/slices/userSlice";
import AddRequest from "../addRequest/AddRequest";
import SpechialButton from "../specialButton/SpechialButton";
const Navbar = ({ color, logoprop }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    navigate("/landing");
  };
  const handleRequest = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className='container'>
      <div className=' navbar' style={{ color: color }}>
        <div className='navbarright'>
          {userToken ? (
            <div style={{ display: "flex", gap: "20px" }}>
              <span onClick={handleLogOut}>تسجيل الخروج</span>
              <SpechialButton
                onclick={handleRequest}
                text={"   طلب خدمه جديده"}
              />
            </div>
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
              <Link style={{ color: color }} to='/'>
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
      {open && <AddRequest setOpen={setOpen} />}
      <ToastContainer position='top-right' />
    </div>
  );
};

export default Navbar;
