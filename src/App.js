import React from "react";
import appStyles from "./App.module.css";
import CircleAnimation from "./Components/CircleAnimation";
import videoFile from "./Assets/video1.mp4";
import InitialScreenSettings from "./Components/InitialScreenSettings";

const App = () => {
  const initialScreen = InitialScreenSettings();
  return (
    <div className={appStyles.mainAppContainer}>
      <div className={appStyles["app-header"]}>
        {initialScreen === "hey" && (
          <p className={appStyles.firstMessage}>Hey.</p>
        )}
        {initialScreen === "justBreathe" && (
          <p className={appStyles.firstMessage}>Just breathe...</p>
        )}
        {initialScreen === "circle" && <CircleAnimation />}
      </div>
      <video autoPlay muted loop className={appStyles["background-video"]}>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
