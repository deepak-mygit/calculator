import React from "react";
import "./ButtonCard.css";

const ButtonCard = ({ onButtonClick }) => {
  const buttonName = [
    "C",
    "%",
    "*",
    "/",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="btn">
      {buttonName.map((data) => (
        <button onClick={() => onButtonClick(data)}>{data}</button>
      ))}
    </div>
  );
};

export default ButtonCard;
