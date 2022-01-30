import React from "react";
import InputForm from "../form-components/InputForm";
import DisplayText from "../form-components/DisplayText";
import Button from "../form-components/Button";

const FormWorkspaceDetails = ({ nextStep, handleChange, formData }) => {
  const { workspaceName, workspaceUrl } = formData;
  return (
    <div className="container">
      <div className="header-section">
        <DisplayText
          className="header-title"
          text="Let's set up a home for all your work"
        />
        <DisplayText
          className="header-description"
          text="You can always change them later."
        />
      </div>
      <div className="form-content">
        <InputForm
          type="text"
          placeholder="Eden"
          name="workspaceName"
          value={workspaceName}
          onChange={handleChange}
          label="Workspace Name"
        />
        <label className="form-label">
          Workspace URL <span className="optioanl-tag">(optional)</span>
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text">www.eden.com/</span>
          <input
            type="text"
            className="form-control"
            placeholder="Example"
            name="workspaceUrl"
            value={workspaceUrl}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" handleSubmit={nextStep} text="Create Workspace" />
      </div>
    </div>
  );
};

export default FormWorkspaceDetails;
