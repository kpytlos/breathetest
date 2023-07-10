import React from "react";
import "./ButtonUniStyle.css";

const ButtonUniStyle = ({ onClick, children }) => {
  return (
    <div>
      <button className="uniButton" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default ButtonUniStyle;
