import React from "react";
import { Link } from "react-router-dom";

import ContainerLayout from "../../layout/container-layout/ContainerLayout";

import s from "./Header.module.scss";

import teamIcon from "../../assets/img/team.jpg";

const Header = ({
  icon,
  onMouseOver,
  onMouseOut,
  isActiveMenu,
  changeIsActiveMenu,
  changeCategory,
  links,
  category,
}) => {
  return (
    <ContainerLayout>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.block_icon}>
            <a href="https://pbs.twimg.com/media/D_l1c2qXsAAykgI.jpg">
              <img src={teamIcon} alt="team" className={s.icon} />
            </a>
          </div>
          <nav className={s.nav}>
            <ul className={s.list}>
              {links.map((link, i) => (
                <Link key={link} to="/" onClick={() => changeCategory(i)}>
                  <div
                    className={
                      category == i
                        ? s.list__block + " " + s.list__block_active
                        : s.list__block
                    }
                  >
                    <li className={s.list__item}>{link}</li>
                  </div>
                </Link>
              ))}
            </ul>
          </nav>
          <div
            className={s.burger}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            onClick={() => changeIsActiveMenu(!isActiveMenu)}
          >
            <div
              className={
                s.burger__line +
                " " +
                (isActiveMenu ? s["burger__line--active"] : s[icon])
              }
            ></div>
            <div
              className={
                s.burger__line +
                " " +
                (isActiveMenu ? s["burger__line--active"] : s[icon])
              }
            ></div>
            <div
              className={
                s.burger__line +
                " " +
                (isActiveMenu ? s["burger__line--active"] : s[icon])
              }
            ></div>
          </div>
        </div>
      </header>
    </ContainerLayout>
  );
};

export default Header;
