import React from "react";

const FormRoleDetails = ({ nextStep, handleChange, formData }) => {
  // const { fullName, displayName } = formData;
  return (
    <div className="container">
      <div className="header-section">
        <p className="header">How are you planning to use Eden?</p>
        <span className="header-desc">
          We'll streamline your setup experience accordingly.
        </span>
      </div>
      <div className="form-content">
        <div className="flex-card">
          <label>
            <input type="radio" name="product" className="card-input-element" />
            <div className="card-input">
              <i className="bi bi-person-fill"></i>
              <p className="radio-header">For myself</p>
              <p className="radio-desc">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </label>
          <label>
            <input type="radio" name="product" className="card-input-element" />
            <div className="card-input">
              <i className="bi bi-people-fill"></i>
              <p className="radio-header">With my team</p>
              <p className="radio-desc">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </label>
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

export default FormRoleDetails;
