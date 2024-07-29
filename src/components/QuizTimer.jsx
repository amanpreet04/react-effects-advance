import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timerId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timerId);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 100);
    }, 100);

    return () => clearTimeout(interval);
  }, []);

  return <progress max={timeout} value={remainingTime} />;
}
