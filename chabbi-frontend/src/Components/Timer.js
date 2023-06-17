import React, { useEffect, useRef, useState } from "react";
import style from "../Styles/Header.module.css";

const fixTimeString = (time) => (time < 10 ? `0${time}` : time);

const formatTimeToString = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const outputString = `00:${fixTimeString(minutes)}:${fixTimeString(seconds)}`;
  return outputString;
};

const Timer = ({ setStartType }) => {
  let [toggle, setToogle] = useState(true);
  let refId = useRef();
  let [timer, SetTimer] = useState(300);

  let timerFunction = () => {
    refId.current = setInterval(() => {
      SetTimer((prev) => {
        if (prev === 0) {
          setToogle(true);
          setStartType(true);
          clearInterval(refId.current);
          return 300;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(refId.current);
    };
  }, []);

  return (
    <>
      <button
        className={style["header-main-input-button"]}
        disabled={!toggle}
        onClick={() => {
          setToogle(!toggle);
          timerFunction();
          setStartType(false);
        }}
      >
        Start
      </button>

      <button className={style["header-main-input-button"]} type="button">
        <span style={{ color: "white", fontSize: "20px" }}>
          {formatTimeToString(timer)}
        </span>
      </button>
    </>
  );
};

export default Timer;
