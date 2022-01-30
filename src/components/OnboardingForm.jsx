import React, { useState } from "react";
import FormRoleDetails from "./pages/FormRoleDetails";
import FormUserDetails from "./pages/FormUserDetails";
import FormWorkspaceDetails from "./pages/FormWorkspaceDetails";
import Success from "./pages/Success";

import "./css/app.css";
import "./css/onBoardingForm.css";

const OnboardingForm = ({ nextStep, step }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <FormWorkspaceDetails
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <FormRoleDetails
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 4:
      return <Success handleSubmit={handleSubmit} />;
    default:
      console.log("Onboaring Form");
  }
};

export default OnboardingForm;
