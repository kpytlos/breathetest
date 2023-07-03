import React, { Component } from "react";
import "./AnimationOptions.css";

class AnimationOptions extends Component {
  handleDurationChange = (duration) => {
    this.props.onDurationChange(duration);
  };

  render() {
    return (
      <div className="durationButtons">
        <button onClick={() => this.handleDurationChange(8)}>8s</button>
        <button onClick={() => this.handleDurationChange(10)}>10s</button>
        <button onClick={() => this.handleDurationChange(12)}>12s</button>
      </div>
    );
  }
}

export default AnimationOptions;
