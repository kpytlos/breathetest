import React, { Component } from "react";
import "./AnimationOptions.css";

class AnimationOptions extends Component {
  handleBreathsNumber = (newBreaths) => {
    this.props.onBreathsNumber(newBreaths);
  };

  render() {
    return (
      <div className="durationButtons">
        <button onClick={() => this.handleBreathsNumber(7)}>7</button>
        <button onClick={() => this.handleBreathsNumber(8)}>8</button>
        <button onClick={() => this.handleBreathsNumber(9)}>9</button>
        <button onClick={() => this.handleBreathsNumber(10)}>10</button>
      </div>
    );
  }
}

export default AnimationOptions;
