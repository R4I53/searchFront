import React from "react";
import { useHistory } from "react-router";
import { useActiveIcon } from "../../hooks/useActiveIcon";

import teamIcon from "../../assets/img/team.jpg";

import s from "./Header.module.scss";

const Header = () => {
  const history = useHistory();
  const { icon, onMouseOver, onMouseOut } = useActiveIcon(
    false,
    "burger__line--not-active",
    "burger__line--active"
  );

  console.log(history);

  return (
    <>
      {history.location.pathname !== "/auth" && (
        <header className={s.header}>
          
          <div className={s.container}>
            <div className={s.block_icon}>
              <img src={teamIcon} alt="team" className={s.icon} />
            </div>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li className={s.list__item}>ВСЕ</li>
                <li className={s.list__item}>ВАЖНЫЕ</li>
                <li className={s.list__item}>ВТОРОСТЕПЕННЫЕ </li>
              </ul>
            </nav>
            <div
              className={s.burger}
              onMouseOut={onMouseOut}
              onMouseOver={onMouseOver}
            >
              <div className={s.burger__line + " " + s[icon]}></div>
              <div className={s.burger__line + " " + s[icon]}></div>
              <div className={s.burger__line + " " + s[icon]}></div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;



