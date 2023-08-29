import React, { useState } from "react";
import "../register/register.scss";
import Input from "../../components/input/Input";
import { loginOrRegister } from "../../rtk/apiCalls";
import { useDispatch } from "react-redux";

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
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User name",
      erroMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "userName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "",
      lable: "Phone Number",
      pattern: "",
      required: true,
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      lable: "Email",
      pattern: "",
      required: true,
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      //   errorMessage: "It should be a valid email address!",
      lable: "birthday",
      pattern: "",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      lable: "password",
      pattern:
        "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: " Passwords don't match!",
      lable: "confirm password",
      pattern: user.password,
      required: true,
    },
  ];
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginOrRegister(dispatch, user);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((inputs) => (
        <Input
          key={inputs.id}
          {...inputs}
          value={user[inputs.name]}
          onChange={handleChange}
        />
      ))}
      <button type='submit'>submit</button>
    </form>
  );
}

export default Register;
