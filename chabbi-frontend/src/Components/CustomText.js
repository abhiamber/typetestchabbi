import Header from "../Components/Header";
import { useDispatch } from "react-redux";
import { setData } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import style from "../Styles/CustomText.module.css";

const CustomText = () => {
  const dispachFn = useDispatch();
  const navigate = useNavigate();
  const [userText, changeUserText] = useState("");
  const [errorMsg, updateMsg] = useState(false);

  const changedUserInput = (event) => {
    updateMsg(false);
    changeUserText(event.target.value);
  };

  const goBackFromUser = () => {
    navigate("/", { replace: true });
  };

  const userTextSubmittion = () => {
    if (userText !== "") {
      updateMsg(false);
      dispachFn(setData(userText));
      navigate("/", { replace: true });
    } else {
      updateMsg(true);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={style["custom-text-main-bg"]}>
        <div className={style["custom-text-innner-bg"]}>
          <h1 className={style["custom-text-main-heading"]}>
            Provide Custom Text for Touch Typing
          </h1>
          <textarea
            onChange={changedUserInput}
            className={style["user-input-text-area"]}
            value={userText}
          ></textarea>
          <div>
            <button
              className={style["custom-text-button-style"]}
              type="button"
              onClick={userTextSubmittion}
            >
              Submit Text
            </button>
            <button
              className={style["custom-text-go-back-button"]}
              type="button"
              onClick={goBackFromUser}
            >
              Go back
            </button>
          </div>
          {errorMsg && (
            <p className={style["error-message-custom-text"]}>
              *please provide some text data
            </p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CustomText;
