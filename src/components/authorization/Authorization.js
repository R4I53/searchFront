import React from "react";
import icon from "../../img/icon.svg";
import bg from "../../img/Bg.jpg";
import s from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.form}>
          <h3 className={s.form__text}>Введите ключ</h3>
          <div className={s.form__container}>
            <input type="text" className={s.form__input} />
            <img src={icon} alt="далее" className={s.form__icon} />
          </div>
        </div> 
      </div>
  );
};

export default Authorization;
