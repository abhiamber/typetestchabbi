import { IoIosMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetData } from "../Redux/action";
import style from "../Styles/Header.module.css";
import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

const Header = () => {
  const navigate = useNavigate();
  const dispachFn = useDispatch();

  const clickedOnCustomText = () => {
    navigate("/custom-text", { replace: true });
  };

  const clickedOnReset = () => {
    dispachFn(resetData());
    window.location.reload();
  };

  return (
    <div className={style["main-header-container"]}>
      <div className={style["header-title-logo"]}>TouchTyping</div>
      <div className={style["header-user-input-email"]}>
        <Timer />

        <div className={style["header-icon-container"]}>
          <BiReset size={30} onClick={clickedOnReset} />
        </div>
      </div>
    </div>
  );
};

export default Header;
