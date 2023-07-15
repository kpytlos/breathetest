import React, { useEffect, useState } from "react";

const InitialScreenSettings = () => {
  const [initialScreen, setInitialScreen] = useState("hey");

  useEffect(() => {
    const displayScreen = setTimeout(() => {
      setInitialScreen("justBreathe");
    }, 2500);

    const displayScreen2 = setTimeout(() => {
      setInitialScreen("circle");
    }, 4000);

    return () => {
      clearTimeout(displayScreen);
      clearTimeout(displayScreen2);
    };
  }, []);

  return initialScreen;
};

export default InitialScreenSettings;
