import React from "react";
import Posts from "../posts/Posts";
import Menu from "../menu/Menu";
import s from "./MainContents.module.scss";

const MainContants = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Menu />
        <Posts />
      </div>
    </div>
  );
};

export default MainContants;
