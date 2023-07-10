import React, { useState, useEffect } from "react";
import ButtonNumberOfBreath from "./Buttons/ButtonNumberOfBreath";
import ButtonHowMuchTime from "./Buttons/ButtonHowMuchTime";
import StatsTimer from "./StatsTimer";
import "./CircleAnimation.css";
import ButtonMainMenu from "./Buttons/ButtonMainMenu";
import "./Buttons/ButtonMainMenu.css";

const Test = () => {
  const [text, setText] = useState("Breathe In");
  const [breaths, setBreaths] = useState(7);
  const [resetAnimation, setResetAnimation] = useState(false);

  const breathDuration = 60 / breaths;

  //>>>>>>>>> TO MANAGE WHEN THE TEXT IS CHANGING ALONG WITH THE CIRCLE
  useEffect(() => {
    const timer = setInterval(() => {
      setText((prevText) =>
        prevText === "Breathe In" ? "Breathe Out" : "Breathe In"
      );
    }, (breathDuration / 2) * 1000);

    return () => {
      clearInterval(timer);
    };
  }, [breaths]);

  //>>>>>>>>> TO MANAGE RESET OF PARAMETERS
  const handleBreathsNumber = (newBreaths) => {
    setBreaths(newBreaths);
    setResetAnimation(true);
    setText("Breathe In");
    setTimeout(() => {
      setResetAnimation(false);
    }, 0);
  };

  const circleClassName = `circle ${resetAnimation ? "reset-animation" : ""}`;

  return (
    <div className="circleContainer">
      <div className="backButtonContainer">
        <ButtonMainMenu />
      </div>
      <div className="circleAnimationAndBreathText">
        <div
          className={circleClassName}
          style={{ animationDuration: `${breathDuration}s` }}
        ></div>
        <div className="text">{text}</div>
      </div>
      <ButtonNumberOfBreath onBreathsNumber={handleBreathsNumber} />
      <ButtonHowMuchTime />
      <StatsTimer resetAnimation={resetAnimation} />
    </div>
  );
};

export default Test;
