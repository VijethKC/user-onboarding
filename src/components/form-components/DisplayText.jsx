import React from "react";
import "../css/displayText.css";

const DisplayText = ({ className, text }) => {
  return <p className={className}>{text}</p>;
};

export default DisplayText;
