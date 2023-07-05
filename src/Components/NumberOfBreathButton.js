import React, { Component } from "react";
import Button from "./Button";
import "./NumberOfBreathButton.css";

class NumberOfBreathButton extends Component {
  state = {
    showOptions: false,
  };

  handleToggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions,
    }));
  };

  handleBreathsNumber = (newBreaths) => {
    this.props.onBreathsNumber(newBreaths);
    this.handleToggleOptions();
  };

  render() {
    const { showOptions } = this.state;
    return (
      <div>
        <div className="toggleButtonOptions">
          <Button onClick={this.handleToggleOptions}>☰</Button>
        </div>
        {showOptions && (
          <div className="buttonsContainer">
            {/* <p className="buttonText">Choose your level (breaths per minute)</p> */}
            <div className="durationButtons">
              <Button onClick={() => this.handleBreathsNumber(3)}>3</Button>
              <Button onClick={() => this.handleBreathsNumber(4)}>4</Button>
              <Button onClick={() => this.handleBreathsNumber(5)}>5</Button>
              <Button onClick={() => this.handleBreathsNumber(6)}>6</Button>
              <Button onClick={() => this.handleBreathsNumber(7)}>7</Button>
              <Button onClick={() => this.handleBreathsNumber(8)}>8</Button>
              <Button onClick={() => this.handleBreathsNumber(9)}>9</Button>
              <Button onClick={() => this.handleBreathsNumber(10)}>10</Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default NumberOfBreathButton;
