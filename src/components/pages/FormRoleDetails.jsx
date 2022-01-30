import React from "react";
import DisplayText from "../form-components/DisplayText";
import Card from "../form-components/Card";
import Button from "../form-components/Button";

const FormRoleDetails = ({ nextStep, handleChange, formData }) => {
  return (
    <div className="container">
      <div className="header-section">
        <DisplayText
          className="header-title"
          text="How are you planning to use Eden?"
        />
        <DisplayText
          className="header-description"
          text="We'll streamline your setup experience accordingly."
        />
      </div>
      <div className="form-content">
        <div className="card-section">
          <Card
            header="For myself"
            desc="Write better. Think more clearly. Stay organized."
            icon="bi bi-person-fill"
          />
          <Card
            header="With my team"
            desc="Wikis, docs, tasks & projects, all in one place."
            icon="bi bi-people-fill"
          />
        </div>
        <Button type="submit" handleSubmit={nextStep} text="Create Workspace" />
      </div>
    </div>
  );
};

export default FormRoleDetails;
