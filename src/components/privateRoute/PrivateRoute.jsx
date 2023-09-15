import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const userToken = useSelector((state) => state.user.currentUser)?.token;
  const userToken = localStorage.getItem("token");
  const checkUserToken = () => {
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/landing");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return (
    <>
      <>{isLoggedIn ? props.children : null}</>
    </>
  );
};

export default PrivateRoute;
