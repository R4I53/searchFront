import React from "react";
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
  return (
    <>
      <div
        className={window.innerWidth <= 1280 && stateBlock ? s.active : ""}
        onClick={changeState}
      ></div>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Menu
            stateButton={stateButton}
            stateBlock={stateBlock}
            changeState={changeState}
          />
          <Posts />
        </div>
      </div>
    </>
  );
};

export default MainContants;
