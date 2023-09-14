import React from "react";
import "./specialButton.scss";
const SpechialButton = ({ onclick, text, type }) => {
  return (
    <button onClick={onclick} type={type} className='specilButton'>
      {text}
    </button>
  );
};

export default SpechialButton;
