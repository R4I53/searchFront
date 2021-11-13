import React from "react";

import s from "./BGLayout.module.scss";

const BGLayout = ({ vantaRef, children }) => (
  <div ref={vantaRef} className={s.bg}>
    {children}
  </div>
);

export default BGLayout;
