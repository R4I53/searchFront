import React from "react";
import s from "./Menu.module.scss";
import icon from "../../img/Arrow.svg";

const Menu = () => {
  return (
    <aside className={s.aside}>
      <div className={s.wrapper}>
        <button className={s.button}>
          <img src={icon} alt="bt" className={s.icon} />
        </button>
        <div className={s.block}>
          <div className={s.container}>
            <div className={s.block_item}>
              <h3 className={s.title}>Важные:</h3>
              <div className={s.container_list}>
                <ul className={s.menu_list}>
                  <li className={s.menu_list__item}>Паритет</li>
                  <li className={s.menu_list__item}>Дарья Бульба</li>
                  <li className={s.menu_list__item}>Александра Пакарклис</li>
                </ul>
              </div>
            </div>

            <div className={s.block_item}>
              <h3 className={s.title}>Важные:</h3>
              <div className={s.container_list}>
                <ul className={s.menu_list}>
                  <li className={s.menu_list__item}>Паритет</li>
                  <li className={s.menu_list__item}>Дарья Бульба</li>
                  <li className={s.menu_list__item}>Александра Пакарклис</li>
                </ul>
              </div>
            </div>

            <div className={s.block_item}>
              <h3 className={s.title}>Важные:</h3>
              <div className={s.container_list}>
                <ul className={s.menu_list}>
                  <li className={s.menu_list__item}>Паритет</li>
                  <li className={s.menu_list__item}>Дарья Бульба</li>
                  <li className={s.menu_list__item}>Александра Пакарклис</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
