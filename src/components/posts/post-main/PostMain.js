import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useActive } from "../../../hooks/useActive";
import s from "./PostMain.module.scss";

import daria from "../../../assets/img/Daria.jpg";
import iconDefault from "../../../assets/img/arrow-default.svg";
import iconActive from "../../../assets/img/arrow-active.svg";

const PostMain = () => {
  const post = useSelector((state) => state.post);
  const { isActiveMenu } = post;
  const { icon, onMouseOver, onMouseOut } = useActive(
    false,
    iconDefault,
    iconActive
  );

  return window.innerWidth > 620 ? (
    <section
      className={s.block}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link to="/post/1">
        <div className={s.container}>
          <div className={s.block_img}>
            <img src={daria} alt="фото" className={s.img} />
          </div>
          <div className={s.right}>
            <h1 className={s.title}>Дарья Бульба</h1>
            <div className={s.wrapper}>
              <p className={s.text}>
                Даша Бульба — девушка с обворожительной улыбкой из Одессы.
              </p>
            </div>
          </div>
          <img src={icon} alt="далее" className={s.icon} />
        </div>
      </Link>
    </section>
  ) : (
    ""
  );
};

export default PostMain;
