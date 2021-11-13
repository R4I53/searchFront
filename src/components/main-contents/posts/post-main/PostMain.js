import React from "react";

import s from "./PostMain.module.scss";

import daria from "../../../../assets/img/Daria.jpg";
import icon from "../../../../assets/img/arrow-default.svg";

const PostMain = () => {
  return window.innerWidth > 620 ? (
    <section className={s.block}>
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
    </section>
  ) : (
    ""
  );
};

export default PostMain;
