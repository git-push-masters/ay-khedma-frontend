import React, { useContext, useEffect, useState } from "react";
import "./profilePhotoStep.scss";
import Profile from "../../../assests/profile.svg";
import SpechialButton from "../../specialButton/SpechialButton";
import { MultiStepContext } from "../../../authstatemang/StepContext";
import axios from "axios";
import axiosInstsnce from "../../../configs/axiosInstanse";
const ProfilePhotoStep = () => {
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [avatar, setAvatar] = useState();
  const { setUserData, userData, setCurrentStep } = useContext(
    MultiStepContext
  );
  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append("avatar", profilePhoto[0]);

    try {
      const res = await axiosInstsnce.post("/avatars", formData);
      const url = res.data.url;
      console.log(url);
      setAvatar(url);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const upload = async () => {
      await uploadPhoto();
    };
    upload();
  }, [profilePhoto]);
  const user = { ...userData, avatar };
  const handleClick = () => {
    setCurrentStep(4);
    setUserData(user);
  };
  return (
    <div className='profilePhotoStep'>
      <div className='texts'>
        {" "}
        <h3>اختر الصورة الشخصية الخاصة بك</h3>
      </div>
      <div className='iconContainer'>
        <div className='icon'>
          <img src={Profile} alt='' />
        </div>
      </div>
      <input
        onChange={(e) => setProfilePhoto(e.target.files)}
        id='id2'
        type='file'
        style={{ display: "none" }}
      />
      {profilePhoto ? (
        <SpechialButton type='button' text={"التالي"} onclick={handleClick} />
      ) : (
        <label htmlFor='id2' className='buttonLocation'>
          تحميل من الجهاز
        </label>
      )}
    </div>
  );
};

export default ProfilePhotoStep;
