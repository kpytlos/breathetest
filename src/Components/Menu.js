import React from "react";
import Button from "./Button";
import "./Menu.css";

const Menu = ({ onMenuOptionSelect }) => {
  const handleOptionSelect = (option) => {
    onMenuOptionSelect(option);
  };
  return (
    <div className="menuContainer">
      <h2>Menu</h2>
      <Button onClick={() => handleOptionSelect("circle")}>
        Free Breathing
      </Button>
      <Button onClick={() => handleOptionSelect("menu")}>
        Customize session (comming soon)
      </Button>
    </div>
  );
};

export default Menu;
