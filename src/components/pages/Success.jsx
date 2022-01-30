import React from "react";
import DisplayText from "../form-components/DisplayText";
import Button from "../form-components/Button";

const Success = ({ handleSubmit }) => {
  return (
    <div className="container">
      <i className="bi bi-check-circle-fill"></i>
      <div className="header-section">
        <DisplayText className="header-title" text="Congratulations, Eren!" />
        <DisplayText
          className="header-description"
          text="You have completed onboarding, you can start using the Eden!"
        />
      </div>
      <div className="form-content">
        <Button
          type="submit"
          handleSubmit={handleSubmit}
          text="Create Workspace"
        />
      </div>
    </div>
  );
};

export default Success;
