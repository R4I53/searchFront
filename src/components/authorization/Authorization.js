import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Authorization.module.scss";
import icon from "../../img/icon.svg";
import actions from "../../redux/auth/actions";

const Authorization = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.isError);

  const [password, setPassword] = React.useState("");

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <h3 className={s.form__text}>Введите ключ</h3>
        <div className={s.form__container}>
          <input
            //onClick={() => dispatch(actions.setError(false))}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className={s.form__input}
          />
          <img
            onClick={() => dispatch(actions.login(password))}
            className={s.form__icon}
            src={icon}
            alt="далее"
          />
        </div>
        {isError && <div className={s.error}>Не верный ключ</div>}
      </div>
    </div>
  );
};

export default Authorization;
