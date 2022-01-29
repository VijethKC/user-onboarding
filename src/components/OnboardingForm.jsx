import React, { useState } from "react";
import FormRoleDetails from "./FormRoleDetails";
import FormUserDetails from "./FormUserDetails";
import FormWorkspaceDetails from "./FormWorkspaceDetails";
import Success from "./Success";

import "./css/app.css";

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
      return <Success />;
    default:
      console.log("Onboaring Form");
  }
};

export default OnboardingForm;
