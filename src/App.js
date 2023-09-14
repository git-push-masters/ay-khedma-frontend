import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import Login from "./pages/login/Login.jsx";
import Landing from "./pages/landing/Landing.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Service from "./pages/service/Service.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path='/service'
          element={
            <PrivateRoute>
              <Service />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        {/* <Route element={<PrivateRoute />}>
          <Route element={<Home />} path='/home' exact />
          <Route element={<Profile />} path='/profile' />
          <Route element={<Service />} path='/service' />
        </Route> */}
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
