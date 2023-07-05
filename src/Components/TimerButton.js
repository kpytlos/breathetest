import React, { Component } from "react";
import Button from "./Button";
import "./TimerButton.css";

class TimerButton extends Component {
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
          <Button onClick={this.handleToggleOptions}>☰</Button>
        </div>
        {showOptions && (
          <div className="optionsContainer">
            <Button>X</Button>
            <Button>Free</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
          </div>
        )}
      </div>
    );
  }
}

export default TimerButton;
