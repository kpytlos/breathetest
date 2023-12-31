import React, { useState, useEffect } from "react";
import ButtonsTogether from "./ButtonsTogether";
import StatsTimer from "./StatsTimer";
import circleAnimation from "./Styles/CircleAnimation.module.css";

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
  }, [breathDuration]);

  //>>>>>>>>> TO MANAGE RESET OF PARAMETERS
  const handleBreathsNumber = (newBreaths) => {
    setBreaths(newBreaths);
    setResetAnimation(true);
    setText("Breathe In");
    setTimeout(() => {
      setResetAnimation(false);
    }, 0);
  };

  const circleClassName = `${circleAnimation.circle} ${
    resetAnimation ? circleAnimation["reset-animation"] : ""
  }`;

  return (
    <div className={circleAnimation.circleContainer}>
      <div className={circleAnimation.circleAnimationAndBreathText}>
        <div
          className={circleClassName}
          style={{ animationDuration: `${breathDuration}s` }}
        ></div>
        <div className={circleAnimation.text}>{text}</div>
      </div>
      <ButtonsTogether onBreathsNumber={handleBreathsNumber} />
      <StatsTimer resetAnimation={resetAnimation} />
    </div>
  );
};

export default Test;
