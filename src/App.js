import React, { Component } from "react";
import "./App.css";
import Circle from "./Components/Circle";
import Menu from "./Components/Menu";

class App extends Component {
  state = {
    currentScreen: "menu", // Initial screen is set to "menu"
  };

  handleMenuOptionSelect = (option) => {
    if (option === "circle") {
      this.setState({ currentScreen: "circle" });
    } else if (option === "menu") {
      this.setState({ currentScreen: "menu" });
      // Implement logic to switch to customize menu screen
    }
  };

  render() {
    const { currentScreen } = this.state;
    return (
      <div className="App App-header">
        {currentScreen === "menu" ? (
          <Menu onMenuOptionSelect={this.handleMenuOptionSelect} />
        ) : // (<Menu onMenuOptionSelect={this.handleMenuOptionSelect} )/>
        currentScreen === "circle" ? (
          <Circle />
        ) : (
          // Render the customize menu screen component here
          <div>Customize Menu</div>
        )}
      </div>
    );
  }
}

export default App;
