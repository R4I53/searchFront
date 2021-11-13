import React from "react";

import s from "./ContainerLayout.module.scss";

const ContainerLayout = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default ContainerLayout;
