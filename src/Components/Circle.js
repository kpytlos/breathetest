import React, { Component } from "react";
import "./Circle.css";
import OptionsButton from "./OptionsButton";
import BackButton from "./BackButton";
import "./OptionsButton.css";
import "./BackButton.css";

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

  handleGoBack = () => {
    this.props.onMenuOptionSelect("menu");
  };

  render() {
    const { duration, resetAnimation, breaths } = this.state;
    const circleClassName = `circle ${resetAnimation ? "reset-animation" : ""}`;
    const breathDuration = duration / breaths;

    return (
      <div className="circleContainer">
        <div className="circleBreaths">
          <div
            className={circleClassName}
            style={{ animationDuration: `${breathDuration}s` }}
          ></div>
          <div className="text">{this.state.text}</div>
          <OptionsButton onBreathsNumber={this.handleBreathsNumber} />
          {/* <div className="stats">
          {duration}, {breaths} */}
        </div>
        <BackButton onGoBack={this.handleGoBack} />
      </div>
    );
  }
}

export default Circle;
