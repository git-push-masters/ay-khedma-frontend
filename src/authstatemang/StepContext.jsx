import React, { createContext, useState } from "react";
export const MultiStepContext = createContext();
function StepContext(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [userData, setUserData] = useState([]);
  function submitData() {
    setFinalData([...finalData, userData]);
    setUserData("");
    setCurrentStep(1);
  }
  return (
    <MultiStepContext.Provider
      value={{
        currentStep,
        finalData,
        userData,
        setCurrentStep,
        setUserData,
        setFinalData,
        submitData,
      }}
    >
      {props.children}
    </MultiStepContext.Provider>
  );
}

export default StepContext;
