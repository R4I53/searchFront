import React from "react";

export const useActiveIcon = (state, def, act) => {
  const [active, setActive] = React.useState(state);

  const onMouseOver = () => {
    setActive(true);
  };

  const onMouseOut = () => {
    setActive(false);
  };

  const icon = active ? act : def;

  return { icon, onMouseOver, onMouseOut };
};
