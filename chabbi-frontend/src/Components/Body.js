import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import { MdRunningWithErrors } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import style from "../Styles/Body.module.css";

function Body() {
  const selectorObject = useSelector((reducer) => reducer.textData);

  const [userTyped, updateTyped] = useState("");
  const [score, updateScore] = useState({ matchScore: 0, nonMatched: 0 });
  const [accuracy, updateAccuracy] = useState(0);

  const keyPressedUser = (event) => {
    const alphanumericPattern = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]$/;
    console.log(event.key);
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

  const calculateProgress = () => {
    let progress = 0;

    if (userTyped && userTyped.length >= selectorObject.length) {
      progress = 100;
    } else if (userTyped) {
      progress = (userTyped.length / selectorObject.length) * 100;
    }

    return progress.toFixed(2);
  };

  const calculateTheAccuracy = () => {
    const validScore = score.matchScore - score.nonMatched;
    const calucatePercentage = (validScore / selectorObject.length) * 100;
    const toFixedTwo = calucatePercentage.toFixed(2);
    updateAccuracy(toFixedTwo);
  };

  return (
    <>
      <Header />
      <div className={style["body-main-container"]}>
        <div className={style["inside-container-body"]}>
          <p className={style["demo-data-body"]}>{selectorObject}</p>
          <textarea
            id="#userTypedTextID"
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
                Progress: <span>{calculateProgress()}%</span>
              </p>
            </div>
          </div>
          <div className={style["calculate-accuracy-button-container"]}>
            <button
              onClick={calculateTheAccuracy}
              type="button"
              className={style["calculate-accuracy-button"]}
            >
              Calculate Accuracy
            </button>
            <div
              className={style["body-res-calculate-accuracy-content-container"]}
            >
              <AiFillCheckCircle
                className={style["body-check-icon"]}
                size={25}
              />
              <p className={style["body-res-text-style"]}>
                Accuracy: <span>{accuracy}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
