import React, { useEffect, useState } from "react";
import "./App.css";
import CircleAnimation from "./Components/CircleAnimation";
import videoFile from "./Assets/video1.mp4";

const App = () => {
  const [initialScreen, setInitialScreen] = useState("hey");

  useEffect(() => {
    const displayScreen = setTimeout(() => {
      setInitialScreen("justBreathe");
    }, 500);

    const displayScreen2 = setTimeout(() => {
      setInitialScreen("circle");
    }, 1000);

    return () => {
      clearTimeout(displayScreen);
      clearTimeout(displayScreen2);
    };
  }, []);

  return (
    <div className="MainAppContainer">
      <div className="App-header">
        {initialScreen === "hey" && <p className="firstMessage">Hey.</p>}
        {initialScreen === "justBreathe" && (
          <p className="firstMessage">Just breathe...</p>
        )}
        {initialScreen === "circle" && <CircleAnimation />}
      </div>
      <video autoPlay muted loop id="background-video">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
