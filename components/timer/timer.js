import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const minRef = useRef();
  const secRef = useRef();
  const [min, setMin] = useState(0);
  const [secs, setSecs] = useState(0);
  let counterInterval;
  const startTimer = () => {
    setMin(minRef.current.value);
    setSecs(secRef.current.value);
    minRef.current = minRef.current.value;
    secRef.current = secRef.current.value;
    counterInterval = setInterval(() => {
      if (secRef.current > 0) {
        setSecs((s) => {
          secRef.current = s - 1;
          return s - 1;
        });
      }
      if (secRef.current === 0 && minRef.current > 0) {
        setMin((s) => {
          minRef.current = s - 1;
          secRef.current = 60;
          return s - 1;
        });
        setSecs(60);
      }
      if (secRef.current === 0 && minRef.current === 0) {
        clearInterval(counterInterval);
        return;
      }
    }, 1000);
  };
  const pauseTimer = () => {};
  const resetTimer = () => {};
  return (
    <div>
      Minutes
      <input type="number" ref={minRef} />
      Seconds <input type="number" ref={secRef} />
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
      <div>{`${min}:${secs}`}</div>
    </div>
  );
};

export { Timer };
