import React, { Component } from "react";
import Button from "./Button";
import "./OptionsButton.css";
import "./Button.css";

class OptionsButton extends Component {
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
            <p className="buttonText">Choose your level (breaths per minute)</p>
            <div className="durationButtons">
              <Button onClick={() => this.handleBreathsNumber(3)}>
                3 - Zen Master Breather
              </Button>
              <Button onClick={() => this.handleBreathsNumber(4)}>
                4 - Breathing Guru
              </Button>
              <Button onClick={() => this.handleBreathsNumber(5)}>
                5 - Tranquility Seeker
              </Button>
              <Button onClick={() => this.handleBreathsNumber(6)}>
                6 - Mindful Breathing Enthusiast
              </Button>
              <Button onClick={() => this.handleBreathsNumber(7)}>
                7 - Calmness Achiever
              </Button>
              <Button onClick={() => this.handleBreathsNumber(8)}>
                8 - Peaceful Breathing Bro
              </Button>
              <Button onClick={() => this.handleBreathsNumber(9)}>
                9 - Harmony Ambassador
              </Button>
              <Button onClick={() => this.handleBreathsNumber(10)}>
                10 - Blissful Breath Wizard
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default OptionsButton;
