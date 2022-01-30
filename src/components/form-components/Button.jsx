import React from "react";

const Button = ({ type, handleSubmit, text }) => {
  return (
    <div>
      <button
        type={type}
        className="btn btn-primary mb-3"
        onClick={handleSubmit}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
