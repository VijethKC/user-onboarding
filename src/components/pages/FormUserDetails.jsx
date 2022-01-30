import React from "react";
import InputForm from "../form-components/InputForm";
import Button from "../form-components/Button";
import DisplayText from "../form-components/DisplayText";

const FormUserDetails = ({ nextStep, handleChange, formData }) => {
  const { fullName, displayName } = formData;
  return (
    <div className="container">
      <div className="header-section">
        <DisplayText
          className="header-title"
          text="Welcome! First things first..."
        />
        <DisplayText
          className="header-description"
          text="You can always change them later."
        />
      </div>
      <div className="form-content">
        <InputForm
          type="text"
          placeholder="Steve Jobs"
          name="fullName"
          value={fullName}
          onChange={handleChange}
          label="Full Name"
        />
        <InputForm
          type="text"
          placeholder="Steve"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
        />
        <Button type="submit" handleSubmit={nextStep} text="Create Workspace" />
      </div>
    </div>
  );
};

export default FormUserDetails;
