import React, { Component } from "react";
import ButtonUniStyle from "./ButtonUniStyle";
import "./ButtonHowMuchTime.css";

class ButtonHowMuchTime extends Component {
  state = {
    showOptions: false,
  };

  handleToggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions,
    }));
  };

  render() {
    const { showOptions } = this.state;
    return (
      <div className="timerContainer">
        <div>
          <ButtonUniStyle onClick={this.handleToggleOptions}>☰</ButtonUniStyle>
        </div>
        {showOptions && (
          <div className="optionsContainer">
            <ButtonUniStyle>X</ButtonUniStyle>
            <ButtonUniStyle>Free</ButtonUniStyle>
            <ButtonUniStyle>1</ButtonUniStyle>
            <ButtonUniStyle>2</ButtonUniStyle>
            <ButtonUniStyle>3</ButtonUniStyle>
            <ButtonUniStyle>4</ButtonUniStyle>
            <ButtonUniStyle>5</ButtonUniStyle>
          </div>
        )}
      </div>
    );
  }
}

export default ButtonHowMuchTime;
