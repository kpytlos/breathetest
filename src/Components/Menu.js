import React from "react";
import "./Menu.css";

const Menu = ({ onMenuOptionSelect }) => {
  const handleOptionSelect = (option) => {
    onMenuOptionSelect(option);
  };
  return (
    <div className="menuContainer">
      <h2>Menu</h2>
      <button onClick={() => handleOptionSelect("circle")}>
        Free Breathing
      </button>
      <button onClick={() => handleOptionSelect("menu")}>
        Customize session
      </button>
    </div>
  );
};

export default Menu;
