import React, { useState } from "react";
import OnboardingForm from "./OnboardingForm";
import ProgressBar from "./ProgressBar";

import "./css/app.css";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="app">
      <ProgressBar step={step} />
      <OnboardingForm nextStep={nextStep} step={step} />
    </div>
  );
};

export default App;
