import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Authorization.module.scss";
import icon from "../../img/icon.svg";
import actions from "../../redux/auth/actions";
import { useHistory } from "react-router-dom";

const Authorization = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.isError);

  const [password, setPassword] = React.useState("");

  const auth = async (pass) => {
    const status = await dispatch(actions.login(pass));
    if (status) {
      history.push("/");
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.form}>
        <h3 className={s.form__text}>Введите ключ</h3>
        <div className={s.form__container}>
          <input
            onClick={() => dispatch(actions.setError(false))}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className={s.form__input}
          />
          <img
            onClick={() => auth(password)}
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
