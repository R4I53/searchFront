import React from "react";

import s from "./AuthForm.module.scss";

const AuthForm = ({
  icon,
  onMouseOver,
  onMouseOut,
  password,
  setPassword,
  login,
  onKeyDownAuth,
}) => {
  return (
    <div className={s.block}>
      <div className={s.container}>
        <h2 className={s.text}>Введите ключ</h2>
        <input
          type="text"
          className={s.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => onKeyDownAuth(e, login, password)}
        />
        <button
          className={s.button}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={() => login(password)}
        >
          <img src={icon} alt="далее" className={s.icon} />
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
