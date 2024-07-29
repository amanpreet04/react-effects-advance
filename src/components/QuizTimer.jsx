import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    const timerId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timerId);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("Setting Interval");

    const intervalId = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <progress max={timeout} value={remainingTime} />;
}
