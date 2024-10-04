import { useState } from "react";
import "./App.css";
import ButtonCard from "./Components/Button/ButtonCard";
import InputButton from "./Components/InputButton/InputButton";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  };
  return (
    <>
      <div className="card">
        <h3 className="card-header">Calculator</h3>
        <InputButton calVal={calVal} />
        <ButtonCard onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
