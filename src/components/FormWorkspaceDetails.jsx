import React from "react";

const FormWorkspaceDetails = ({ nextStep, handleChange, formData }) => {
  const { workspaceName, workspaceUrl } = formData;
  return (
    <div className="container">
      <div className="header-section">
        <p className="header">Let's set up a home for all your work</p>
        <span className="header-desc">You can always change them later.</span>
      </div>
      <div className="form-content">
        <div className="mb-3">
          <label className="form-label">Workspace Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Eden"
            name="workspaceName"
            value={workspaceName}
            onChange={handleChange}
          />
        </div>
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
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={nextStep}
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormWorkspaceDetails;
