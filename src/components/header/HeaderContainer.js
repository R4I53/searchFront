import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import { useActive } from "../../hooks/useActive";
import actions from "../../redux/posts/actions";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const { isActiveMenu, category } = useSelector((state) => state.post);
  const { icon, onMouseOver, onMouseOut } = useActive(
    false,
    "burger__line--not-active",
    "burger__line--active"
  );

  const links = ["ВСЕ", "ВАЖНЫЕ", "ВТОРОСТЕПЕННЫЕ"];

  const changeIsActiveMenu = (isActive) =>
    dispatch(actions.setActiveMenu(isActive));

  const changeCategory = (category) => dispatch(actions.setCategory(category));

  React.useEffect(() => {
    console.log("mount");
  }, []);

  const props = {
    icon,
    onMouseOver,
    onMouseOut,
    isActiveMenu,
    changeIsActiveMenu,
    changeCategory,
    links,
    category,
  };

  return <Header {...props} />;
};

export default HeaderContainer;
