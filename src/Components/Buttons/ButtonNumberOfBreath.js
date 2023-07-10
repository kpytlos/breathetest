import React, { Component } from "react";
import ButtonUniStyle from "./ButtonUniStyle";
import "./ButtonNumberOfBreath.css";

class ButtonNumberOfBreath extends Component {
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
        <div className="toggleButtonOptionsIcon">
          <ButtonUniStyle onClick={this.handleToggleOptions}>☰</ButtonUniStyle>
        </div>
        {showOptions && (
          <div className="HowManyBreathsContainer">
            <div className="HowManyBreathsButtons">
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(3)}>
                3
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(4)}>
                4
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(5)}>
                5
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(6)}>
                6
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(7)}>
                7
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(8)}>
                8
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(9)}>
                9
              </ButtonUniStyle>
              <ButtonUniStyle onClick={() => this.handleBreathsNumber(10)}>
                10
              </ButtonUniStyle>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ButtonNumberOfBreath;
