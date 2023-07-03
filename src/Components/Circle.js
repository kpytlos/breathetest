import React, { Component } from "react";
import "./Circle.css";
import AnimationOptions from "./AnimationOptions";

class Circle extends Component {
  state = {
    text: "Breathe In",
    duration: 60,
    breaths: 7,
    resetAnimation: false,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    const breathDuration = this.state.duration / this.state.breaths;
    this.timer = setInterval(this.changeText, (breathDuration / 2) * 1000);
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

  handleBreathsNumber = (newBreaths) => {
    this.setState(
      { breaths: newBreaths, resetAnimation: true, text: "Breathe In" },
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
    const { duration, resetAnimation, breaths } = this.state;
    const circleClassName = `circle ${resetAnimation ? "reset-animation" : ""}`;
    const breathDuration = duration / breaths;

    return (
      <div>
        <div
          className={circleClassName}
          style={{ animationDuration: `${breathDuration}s` }}
        ></div>
        <div className="text">{this.state.text}</div>
        <AnimationOptions onBreathsNumber={this.handleBreathsNumber} />
        {/* <div className="stats">
          {duration}, {breaths} */}
      </div>
      //   </div>
    );
  }
}

export default Circle;
