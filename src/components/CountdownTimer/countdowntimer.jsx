import React, { useState, useEffect, useCallback } from "react";
import "./countdowntimer.css";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = endTime - new Date().getTime();
    return difference > 0 ? difference : 0;
  }, [endTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const formatTime = (ms) => {
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((ms % (1000 * 60)) / 1000)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={`countdown-container ${timeLeft < 60000 ? "pulse" : ""}`}>
      <h2>🔥 Hurry! Limited Time Offer</h2>
      <div className="countdown-timer">
        <span>{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
