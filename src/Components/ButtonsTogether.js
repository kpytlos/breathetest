import React from "react";
import ButtonNumberOfBreath from "./Buttons/ButtonNumberOfBreath";
import ButtonHowMuchTime from "./Buttons/ButtonHowMuchTime";
import ButtonMainMenu from "./Buttons/ButtonMainMenu";
import "./Styles/ButtonsTogether.css";

const ButtonsTogether = ({ onBreathsNumber }) => {
  return (
    <>
      <div className="backButtonContainer">
        <ButtonMainMenu />
      </div>
      <ButtonNumberOfBreath onBreathsNumber={onBreathsNumber} />
      <ButtonHowMuchTime />
    </>
  );
};

export default ButtonsTogether;
