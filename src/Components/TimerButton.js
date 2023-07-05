import React, { Component, useSyncExternalStore } from "react";
import Button from "./Button";
import "./NumberOfBreathButton.css";

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
      <div>
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
