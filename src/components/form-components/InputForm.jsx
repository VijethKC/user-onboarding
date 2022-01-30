import React from "react";

const InputForm = ({ type, placeholder, name, value, onChange, label }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputForm;
