import React from "react";

import BGLayout from "../../layout/bg-layout/BGLayout";
import Posts from "./posts/Posts";
import Menu from "./menu/Menu";

import s from "./MainContents.module.scss";

const MainContants = () => {
  const [stateButton, setStateButton] = React.useState(true);
  const [stateBlock, setStateBlock] = React.useState(true);

  const changeState = () => {
    setStateButton((prev) => !prev);
    setStateBlock((prev) => !prev);
  };
  return <Posts />;
};

export default MainContants;
