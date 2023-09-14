import React, { useContext, useEffect, useState } from "react";
import "./secoundStep.scss";
import Input from "../../input/Input.jsx";
import SpechialButton from "../../specialButton/SpechialButton";
import { MultiStepContext } from "../../../authstatemang/StepContext";
import axios from "axios";
import axiosInstsnce from "../../../configs/axiosInstanse";

const SecoundStep = () => {
  const [bio, setBio] = useState();
  const [sectionId, setSectionId] = useState();
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const [sections, setSections] = useState([]);
  const { setUserData, userData, setCurrentStep } = useContext(
    MultiStepContext
  );

  const user = {
    ...userData,
    bio,
    sectionId,
    isEmailVisible,
    isPhoneVisible,
    isLocationVisible,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
    setUserData(user);
  };
  useEffect(() => {
    const getSections = async () => {
      try {
        const res = await axiosInstsnce.get("/sections");
        console.log(res.data.body);
        setSections(res.data.body);
      } catch (e) {}
    };
    getSections();
  }, []);
  console.log(sections);
  return (
    <div className='secoundStep'>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>ادخل تعريفا</label>
          <textarea
            placeholder='.......'
            onChange={(e) => setBio(e.target.value)}
            rows='10'
          />
        </div>
        <div className='selectionBox'>
          <select onChange={(e) => setSectionId(e.target.value)}>
            <option defaultValue={null}> اختر الخدمة</option>
            {sections.map((item) => (
              <option key={item.id} value={item.id}>
                {" "}
                {item.name}
              </option>
            ))}
            {/* <option value='سباك'> سباك</option>
            <option value='نجار'> نجار</option>
            <option value='جزار'> جزار</option> */}
          </select>
        </div>
        <div className='checkBox'>
          <div className='checkBoxItem'>
            <input
              onChange={(e) => setIsEmailVisible(e.target.value)}
              type='checkbox'
              id='1'
              value='true'
              name='checkBox1'
            />
            <label htmlFor='1'>اوافق علي عرض بريدى الإلكترونى</label>
          </div>
          <div className='checkBoxItem'>
            <input
              onChange={(e) => setIsPhoneVisible(e.target.value)}
              type='checkbox'
              id='2'
              value='true'
              name='checkBox2'
            />
            <label htmlFor='2'>اوافق علي عرض رقم هاتفي </label>
          </div>
          <div className='checkBoxItem'>
            <input
              onChange={(e) => setIsLocationVisible(e.target.value)}
              type='checkbox'
              id='3'
              value='true'
              name='checkBox3'
            />
            <label htmlFor='3'>اوافق علي عرض موقعي </label>
          </div>
        </div>
        <SpechialButton type='submit' text='موافق' />
      </form>
    </div>
  );
};

export default SecoundStep;
