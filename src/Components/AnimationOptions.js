import React, { Component } from "react";
import "./AnimationOptions.css";

class AnimationOptions extends Component {
  state = {
    showOptions: false, // Track if options should be shown or hidden
  };

  handleToggleOptions = () => {
    this.setState((prevState) => ({
      showOptions: !prevState.showOptions, // Toggle showOptions state
    }));
  };

  handleBreathsNumber = (newBreaths) => {
    this.props.onBreathsNumber(newBreaths);
    this.handleToggleOptions(); // Hide options after selecting a number of breaths
  };

  render() {
    const { showOptions } = this.state;
    return (
      <div>
        <div className="toggleButton" onClick={this.handleToggleOptions}>
          <span className="toggleButtonContent">☰</span>
        </div>
        {showOptions && (
          <div className="buttonsContainer">
            <p className="buttonText">Choose your level (breaths per minute)</p>
            <div className="durationButtons">
              <button onClick={() => this.handleBreathsNumber(3)}>
                3 - Zen Master Breather
              </button>
              <button onClick={() => this.handleBreathsNumber(4)}>
                4 - Breathing Guru
              </button>
              <button onClick={() => this.handleBreathsNumber(5)}>
                5 - Tranquility Seeker
              </button>
              <button onClick={() => this.handleBreathsNumber(6)}>
                6 - Mindful Breathing Enthusiast
              </button>
              <button onClick={() => this.handleBreathsNumber(7)}>
                7 - Calmness Achiever
              </button>
              <button onClick={() => this.handleBreathsNumber(8)}>
                8 - Peaceful Breathing Bro
              </button>
              <button onClick={() => this.handleBreathsNumber(9)}>
                9 - Harmony Ambassador
              </button>
              <button onClick={() => this.handleBreathsNumber(10)}>
                10 - Blissful Breath Wizard
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AnimationOptions;
