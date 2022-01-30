import React from "react";

const Card = ({ header, desc, icon }) => {
  return (
    <div className="card-input">
      <i className={icon}></i>
      <p className="radio-header">{header}</p>
      <p className="radio-desc">{desc}</p>
    </div>
  );
};

export default Card;
