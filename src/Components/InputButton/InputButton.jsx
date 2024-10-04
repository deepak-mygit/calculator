import React from "react";
import "./InputButton.css";

const InputButton = ({ calVal }) => {
  return (
    <div className="card-body">
      <input type="text" value={calVal} readOnly />
    </div>
  );
};

export default InputButton;
