import React, { useContext, useEffect, useState } from "react";
import "./locationStep.scss";
import CircularProgress from "@mui/joy/CircularProgress";
import location from "../../../assests/location.svg";
import { MultiStepContext } from "../../../authstatemang/StepContext";
import FlashMessage from "react-flash-message";
import axiosInstsnce from "../../../configs/axiosInstanse";
const LocationStep = () => {
  const [currentLocation, setCurrentLocation] = useState(false);
  const { userData, setCurrentStep } = useContext(MultiStepContext);
  const [res, setRes] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);
  const geoLocationJs = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const { latitude, longitude } = postion.coords;
      setCurrentLocation({ locationLat: latitude, locationLong: longitude });
    });
  };
  const user = { ...userData, ...currentLocation };
  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await axiosInstsnce.post("/auth/register", user);
      setRes(res.data.success);
      setLoading(false);
    } catch (e) {
      setErr(e.response.data.msgs);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (res) {
      setCurrentStep(5);
    }
  }, [res]);
  return (
    <div className='locationStep'>
      <div className='iconContainer'>
        <div className='icon'>
          <img src={location} alt='' />
        </div>
      </div>
      <div className='texts'>
        <h3>ما هو موقعك ؟</h3>
        <p>يجب أن نعرف موقعك حتي نوفر لك الخدمات القريبة من موقعك</p>
        {loading && (
          <CircularProgress
            style={{
              color: "#4eba64",
              marginTop: "20px",
            }}
            variant='solid'
          />
        )}
        {err && <FlashMessage duration={5000}>{err}</FlashMessage>}
      </div>

      {currentLocation ? (
        <button className='buttonLocation' onClick={handleRegister}>
          موافق
        </button>
      ) : (
        <button className='buttonLocation' onClick={geoLocationJs}>
          السماح باستخدام الموقع
        </button>
      )}
    </div>
  );
};

export default LocationStep;
