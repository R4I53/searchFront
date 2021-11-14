import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated } from "react-spring";
import actions from "../../redux/posts/actions";

import s from "./Menu.module.scss";

const Menu = ({ styles, names, isActiveMenu }) => {
  React.useEffect(() => console.log(styles));

  return (
    <animated.aside className={s.aside} style={styles}>
      <div className={s.block}>
        <h3 className={s.category}>Важные:</h3>
        <ul className={s.list}>
          {names.map(
            ({ id, title, category }) =>
              category == 1 && (
                <li key={id} className={s.list__item}>
                  {title}
                </li>
              )
          )}
        </ul>
      </div>
      <div className={s.block}>
        <h3 className={s.category}>Второстепенные:</h3>
        <ul className={s.list}>
          {names.map(
            ({ id, title, category }) =>
              category == 2 && (
                <li key={id} className={s.list__item}>
                  {title}
                </li>
              )
          )}
        </ul>
      </div>
    </animated.aside>
  );
};

export default Menu;
