import React, { Component } from "react";
import "./Circle.css";

class Circle extends Component {
  state = {
    text: "Breathe In",
  };

  componentDidMount() {
    // Start the timer to update the text every 4 seconds
    this.timer = setInterval(this.changeText, 4000);
  }

  componentWillUnmount() {
    // Clear the timer when the component is unmounted
    clearInterval(this.timer);
  }

  changeText = () => {
    this.setState((prevState) => ({
      text: prevState.text === "Breathe In" ? "Breathe Out" : "Breathe In",
    }));
  };

  render() {
    return (
      <div>
        <div className="circle"></div>
        <div className="text">{this.state.text}</div>
      </div>
    );
  }
}

export default Circle;
