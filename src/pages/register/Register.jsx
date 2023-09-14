import React, { useContext, useState } from "react";
import "../register/register.scss";
import { register } from "../../rtk/apiCalls";
import { useDispatch } from "react-redux";
import Navabr from "../../components/navbar/Navabr";
import UserRegisterInfo from "../../components/regisetrComponents/userRegisterInfo/UserRegisterInfo";
import SmsCode from "../../components/regisetrComponents/smsCode/SmsCode";
import SecoundStep from "../../components/regisetrComponents/secoundStep/SecoundStep";
import LocationStep from "../../components/regisetrComponents/locationStep/LocationStep";
import ProfilePhotoStep from "../../components/regisetrComponents/profilePhotoStep/ProfilePhotoStep";
import { MultiStepContext } from "../../authstatemang/StepContext";

function Register() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const { setUserData, userData, currentStep } = useContext(MultiStepContext);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <UserRegisterInfo />;
      case 2:
        return <SecoundStep />;
      case 3:
        return <ProfilePhotoStep />;
      case 4:
        return <LocationStep />;
      case 5:
        return <SmsCode />;
      default:
        break;
    }
  };
  return (
    <div className='registerPage'>
      <Navabr color='white' />
      <div className='layout'></div>
      <div className='registerContainer'>
        <div className='right'>
          <div className='card'>{showStep(currentStep)}</div>
        </div>
        <div className='left'></div>
      </div>
    </div>
  );
}

export default Register;
