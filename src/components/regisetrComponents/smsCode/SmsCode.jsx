import React, { useContext, useEffect, useRef, useState } from "react";
import "./smsCode.scss";
import SpechialButton from "../../specialButton/SpechialButton";
import { MultiStepContext } from "../../../authstatemang/StepContext";
import { register } from "../../../rtk/apiCalls";
import CircularProgress from "@mui/joy/CircularProgress";
import FlashMessage from "react-flash-message";
import axiosInstsnce from "../../../configs/axiosInstanse";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SmsCode = () => {
  const { userData } = useContext(MultiStepContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoading = useSelector((state) => state.user.isFitching);
  const userIsError = useSelector((state) => state.user.isError);
  const userError = useSelector((state) => state.user.error);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef();
  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (!value) {
      setActiveOtpIndex(index - 1);
    } else {
      setActiveOtpIndex(index + 1);
    }
  };
  console.log(currentUser);
  console.log(userData);
  const user = {
    phone: userData.phone,
    password: userData.password,
    code: otp.join(""),
  };
  console.log(user);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  console.log(otp);
  const verify = async () => {
    // try {
    //   const res = await axiosInstsnce.post("/auth/verify", user);
    //   setRes(res);
    //   console.log(res.data);
    // } catch (e) {
    //   console.log(e);
    // }
    // }

    register(dispatch, user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verify();
    // register(dispatch, user);
  };
  if (currentUser) {
    return navigate("/home");
  }
  return (
    <div className='smsCode'>
      <h1 className='text'>ادخل الرمز المكون من 4 ارقام</h1>
      <form onSubmit={handleSubmit}>
        <div className='otp'>
          {otp.map((_, index) => (
            <input
              key={index}
              type='number'
              required={true}
              onChange={(e) => handleChange(e, index)}
              ref={index === activeOtpIndex ? inputRef : null}
              value={otp[index]}
            />
          ))}
        </div>
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
        <SpechialButton type='submit' text='موافق' />
      </form>
    </div>
  );
};

export default SmsCode;
