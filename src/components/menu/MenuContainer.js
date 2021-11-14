import React from "react";
import { Spring, animated, Transition } from "react-spring";
import { useSelector, useDispatch } from "react-redux";

import Menu from "./Menu";
import actions from "../../redux/posts/actions";

const MenuContainer = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { isActiveMenu, names } = post;

  React.useEffect(() => dispatch(actions.getNamePosts()), []);

  const props = { names, isActiveMenu };
  return (
    //<Menu {...props} />
    <Transition
      items={isActiveMenu}
      from={{ marginRight: "-500px" }}
      enter={{ marginRight: "0px" }}
      leave={{ marginRight: "-500px" }}
      reverse={isActiveMenu}
    >
      {(styles, item) => item && <Menu styles={styles} {...props} />}
    </Transition>
  );
};

export default MenuContainer;
