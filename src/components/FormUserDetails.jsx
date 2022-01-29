import React from "react";

const FormUserDetails = ({ nextStep, handleChange, formData }) => {
  const { fullName, displayName } = formData;
  return (
    <div className="container">
      <div className="header-section">
        <p className="header">Welcome! First things first...</p>
        <span className="header-desc">You can always change them later.</span>
      </div>
      <div className="form-content">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Steve Jobs"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Display Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Steve"
            value={displayName}
            name="displayName"
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

export default FormUserDetails;
