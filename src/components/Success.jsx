import React from "react";

const Success = () => {
  return (
    <div className="container">
      <div className="header-section">
        <i className="bi bi-check-circle-fill"></i>
        <p className="header">Congratulations, Eren!</p>
        <span className="header-desc">
          You have completed onboarding, you can start using the Eden!
        </span>
      </div>
      <div className="form-content">
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Launch Eden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
