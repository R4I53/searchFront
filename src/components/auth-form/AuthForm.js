import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useActiveIcon } from "../../hooks/useActiveIcon";

import s from "./AuthForm.module.scss";

import actions from "../../redux/auth/actions";

import iconDefault from "../../assets/img/arrow-min.svg";
import iconActive from "../../assets/img/Vector.svg";

const AuthForm = () => {
  const { icon, onMouseOver, onMouseOut } = useActiveIcon(
    false,
    iconDefault,
    iconActive
  );

  return (
    <div className={s.block}>
      <div className={s.container}>
        <h2 className={s.text}>Введите ключ</h2>
        <input type="text" className={s.input} />
        <button
          className={s.button}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <img src={icon} alt="далее" className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
