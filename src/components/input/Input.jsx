import React, { useState } from "react";
import "./input.scss";
function Input(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...input } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className='input'>
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
export default Input;
