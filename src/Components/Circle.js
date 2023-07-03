import React, { Component } from "react";
import "./Circle.css";
import AnimationOptions from "./AnimationOptions";

class Circle extends Component {
  state = {
    text: "Breathe In",
    duration: 8,
    resetAnimation: false,
  };

  timer = null;

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    this.timer = setInterval(this.changeText, (this.state.duration * 1000) / 2);
  };

  clearTimer = () => {
    // Clear the timer when the component is unmounted
    clearInterval(this.timer);
  };

  changeText = () => {
    this.setState((prevState) => ({
      text: prevState.text === "Breathe In" ? "Breathe Out" : "Breathe In",
    }));
  };

  handleDurationChange = (duration) => {
    this.setState(
      { duration, resetAnimation: true, text: "Breathe In" },
      () => {
        this.clearTimer();
        this.startTimer();
        setTimeout(() => {
          this.setState({ resetAnimation: false });
        }, 0);
      }
    );
  };

  render() {
    const { duration, resetAnimation } = this.state;
    const circleClassName = `circle ${resetAnimation ? "reset-animation" : ""}`;

    return (
      <div>
        <div
          className={circleClassName}
          style={{ animationDuration: `${duration}s` }}
        ></div>
        <div className="text">{this.state.text}</div>
        <AnimationOptions onDurationChange={this.handleDurationChange} />
        <div className="stats">
          {this.state.duration}, {this.timer}
        </div>
      </div>
    );
  }
}

export default Circle;
