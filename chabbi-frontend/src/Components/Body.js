import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import { MdRunningWithErrors } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import style from "../Styles/Body.module.css";

function Body() {
  const selectorObject = useSelector((reducer) => reducer.resetData);
  const [userTyped, updateTyped] = useState("");
  const [startType, setStartType] = useState(true);
  const [score, updateScore] = useState({ matchScore: 0, nonMatched: 0 });

  const keyPressedUser = (event) => {
    const alphanumericPattern = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]$/;
    // console.log(event.key);
    if (alphanumericPattern.test(event.key)) {
      const isMatched = event.key === selectorObject[userTyped.length];
      if (isMatched === true) {
        updateScore({ ...score, matchScore: score.matchScore + 1 });
      } else {
        updateScore({ ...score, nonMatched: score.nonMatched + 1 });
      }
    } else if (event.key === "Backspace") {
      if (score.matchScore > 0) {
        updateScore({ ...score, matchScore: score.matchScore - 1 });
      }
    }
  };

  const userTestStart = (event) => {
    updateTyped(event.target.value);
  };

  const calculateTheAccuracy = () => {
    const calucatePercentage =
      (score.matchScore / (score.matchScore + score.nonMatched)) * 100;
    const toFixedTwo = calucatePercentage.toFixed(2);
    console.log(toFixedTwo);
    if (toFixedTwo > 0) {
      return toFixedTwo;
    }
    return 0;
  };

  return (
    <>
      <Header setStartType={setStartType} />
      <div className={style["body-main-container"]}>
        <div className={style["inside-container-body"]}>
          <p className={style["demo-data-body"]}>
            {selectorObject.split("").map((w, index) => (
              <span
                key={index}
                style={{
                  color:
                    userTyped.length === index
                      ? "red"
                      : userTyped.length > index + 1
                      ? "blue"
                      : null,
                  fontSize: userTyped.length > index + 1 ? "15px" : null,
                }}
              >
                {w}
              </span>
            ))}
          </p>
          <textarea
            id="#userTypedTextID"
            disabled={startType}
            onKeyDown={keyPressedUser}
            onChange={userTestStart}
            className={style["body-user-input"]}
            value={userTyped}
          ></textarea>
          <div className={style["complete-body-res-container"]}>
            <div className={style["body-result-icon-text-container"]}>
              <MdRunningWithErrors
                className={style["body-error-icon"]}
                size={25}
              />
              <p className={style["body-res-text-style"]}>
                Mistakes: <span>{score.nonMatched}</span>
              </p>
            </div>
            <div className={style["body-result-icon-text-container"]}>
              <FaTasks className={style["body-task-icon"]} size={25} />
              <p className={style["body-res-text-style"]}>
                Total Pressed Key:{" "}
                <span>{score.matchScore + score.nonMatched}</span>
              </p>
            </div>
          </div>
          <div className={style["calculate-accuracy-button-container"]}>
            <div
              className={style["body-res-calculate-accuracy-content-container"]}
            >
              <AiFillCheckCircle
                className={style["body-check-icon"]}
                size={25}
              />
              <p className={style["body-res-text-style"]}>
                Accuracy: <span>{calculateTheAccuracy()}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
