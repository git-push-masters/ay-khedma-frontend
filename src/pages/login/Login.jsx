import React, { useState } from "react";
import Input from "../../components/input/Input";
import "./login.scss";
import { loginOrRegister } from "../../rtk/apiCalls";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    phoneNumber: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "phoneNumber",
      label: "phoneNumber",
      type: "text",
      error: "not amtch",
      required: true,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      error: "not amtch",
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
      {inputs.map((input) => (
        <Input
          key={input.id}
          {...input}
          onChange={handleChange}
          value={user[input.name]}
        />
      ))}
      <button type='submit'>submit</button>
    </form>
  );
}

export default Login;
