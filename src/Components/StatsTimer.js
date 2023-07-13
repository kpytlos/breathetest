import React, { useState, useEffect } from "react";
import "./Styles/StatsTimer.css";

export default function StatsTimer({ resetAnimation }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (resetAnimation) {
      setTime(0);
    }
  }, [resetAnimation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [resetAnimation]);

  return (
    <>
      <p className="statsTimer">Time: {time}</p>
    </>
  );
}
