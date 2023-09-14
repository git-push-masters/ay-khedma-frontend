import React, { useEffect, useState } from "react";
import "./login.scss";
import "../../styles/main.scss";
import Navbar from "../../components/navbar/Navabr";
import logoShape from "../../assests/logoShape.svg";
import GoogleAndApple from "../../components/regisetrComponents/GoogleandApple/GoogleAndApple";
import SpechialButton from "../../components/specialButton/SpechialButton";
import Input from "../../components/input/Input";
import CircularProgress from "@mui/joy/CircularProgress";
import { login } from "../../rtk/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FlashMessage from "react-flash-message";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoading = useSelector((state) => state.user.isFitching);

  const userIsError = useSelector((state) => state.user.isError);
  const userError = useSelector((state) => state.user.error);
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "phone",
      label: "رقم التليفون",
      type: "text",
      error: "not match",
      required: true,
      minLength: 11,
    },
    {
      id: 2,
      name: "password",
      label: "كلمة المرور",
      type: "password",
      error: "not match",
      required: true,
    },
  ];
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const userredux = useSelector((state) => state.user.currentUser);
  console.log(userredux);
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(dispatch, user);
  };
  if (userredux) {
    return navigate("/home");
  }

  return (
    <div className='login'>
      <div className='layout'></div>
      <Navbar color='white' />
      <div className='loginContainer'>
        <div className='right'>
          <div className='card'>
            <div className='info'>
              <img src={logoShape} alt='' />
              <h3>اهلا بعودتك</h3>
              <span className='text'>من فضلك سجل بيانتك للدخول</span>
            </div>
            <form onSubmit={handleSubmit} className='form'>
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  value={inputs[input.name]}
                  onChange={handleChange}
                  {...input}
                />
              ))}

              <div className='fromTexts'>
                <span>هل نسيت كلمة المرور؟</span>
                <span>تذكرنى</span>
              </div>
              <SpechialButton type='submit' text='تسجيل الدخول' />
              {userLoading && (
                <CircularProgress
                  style={{
                    color: "#4eba64",
                    marginTop: "20px",
                  }}
                  variant='solid'
                />
              )}
              {userIsError && (
                <FlashMessage duration={10000}>{userError}</FlashMessage>
              )}
            </form>
            <GoogleAndApple />
            <p className='RegisterLink'>
              ليس لديك حساب بعد؟<Link to='/register'>التسجيل</Link>
            </p>
          </div>
        </div>
        <div className='left'></div>
      </div>
    </div>
  );
}

export default Login;
