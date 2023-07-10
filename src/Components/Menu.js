import React from "react";
import Button from "./Buttons/ButtonUniStyle";
import "./Menu.css";

const Menu = ({ onMenuOptionSelect }) => {
  const handleOptionSelect = (option) => {
    onMenuOptionSelect(option);
  };
  return (
    <div>
      <div className="mainTitle">
        Enhancing your well-being through mindful breathing.
      </div>
      <div className="menuContainer">
        <h2>Menu</h2>
        <Button onClick={() => handleOptionSelect("circle")}>
          Free Breathing
        </Button>
        <Button onClick={() => handleOptionSelect("menu")}>
          Customize session (comming soon)
        </Button>
      </div>
    </div>
  );
};

export default Menu;
