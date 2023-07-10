import React from "react";
import ButtonUniStyle from "./ButtonUniStyle";
import "./ButtonMainMenu.css";
import "./ButtonUniStyle.css";

const ButtonMainMenu = ({ onGoBack }) => {
  return (
    <div className="backButton">
      <ButtonUniStyle onClick={onGoBack}>Back</ButtonUniStyle>
    </div>
  );
};

export default ButtonMainMenu;
