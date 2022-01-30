import React, { useRef, useEffect } from "react";

import "./css/progressBar.css";

const ProgressBar = ({ step }) => {
  const listOne = useRef();
  const listTwo = useRef();
  const listThree = useRef();
  const listFour = useRef();

  const arr = [listOne, listTwo, listThree, listFour];

  useEffect(() => {
    arr.slice(0, step).map((element) => {
      element.current.style.backgroundColor = "#673ab7";
      element.current.style.color = "white";
    });
  }, [step]);

  return (
    <div className="p-container">
      <ul className="p-list">
        <hr />
        <li ref={listOne}>1</li>
        <li ref={listTwo}>2</li>
        <li ref={listThree}>3</li>
        <li ref={listFour}>4</li>
      </ul>
    </div>
  );
};

export default ProgressBar;
