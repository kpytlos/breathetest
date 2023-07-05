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
          <div>
            <Button>YO</Button>
          </div>
        )}
      </div>
    );
  }
}

export default TimerButton;
