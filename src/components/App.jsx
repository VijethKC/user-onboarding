import React, { useState } from "react";
import OnboardingForm from "./OnboardingForm";
import ProgressBar from "./ProgressBar";
import logo from "./images/logo.PNG";

import "./css/app.css";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="app">
      <img src={logo} alt="Logo" className="logo" />
      <ProgressBar step={step} />
      <OnboardingForm nextStep={nextStep} step={step} />
    </div>
  );
};

export default App;
