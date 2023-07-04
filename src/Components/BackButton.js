import React from "react";
import Button from "./Button";
import "./BackButton.css";
import "./Button.css";

const BackButton = ({ onGoBack }) => {
  return (
    <div className="backButton">
      <Button onClick={onGoBack}>Back</Button>
    </div>
  );
};

export default BackButton;
