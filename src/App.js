import React, { Component } from "react";
import "./App.css";
import CircleAnimation from "./Components/CircleAnimation";
import Menu from "./Components/Menu";
import BackButton from "./Components/BackButton";
import "./Components/BackButton.css";
import videoFile from "./Assets/video1.mp4";

class App extends Component {
  state = {
    currentScreen: "circle", // Initial screen is set to "circle"
  };

  handleMenuOptionSelect = (option) => {
    if (option === "circle") {
      this.setState({ currentScreen: "circle" });
    } else if (option === "menu") {
      this.setState({ currentScreen: "menu" });
      // Implement logic to switch to customize menu screen
    }
  };

  handleGoBack = () => {
    this.handleMenuOptionSelect("menu");
  };

  render() {
    const { currentScreen } = this.state;
    return (
      <div className="MainAppContainer">
        <div className="mainTitle">
          Enhancing your well-being through mindful breathing.
        </div>
        <div className="backButtonContainer">
          <BackButton onGoBack={this.handleGoBack} />
        </div>
        <div className="App-header">
          {currentScreen === "menu" ? (
            <Menu onMenuOptionSelect={this.handleMenuOptionSelect} />
          ) : currentScreen === "circle" ? (
            <CircleAnimation onMenuOptionSelect={this.handleMenuOptionSelect} />
          ) : (
            // Render the customize menu screen component here
            <div>Customize Menu</div>
          )}
        </div>
        <video autoPlay muted loop id="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default App;
