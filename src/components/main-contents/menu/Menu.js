import React from "react";
import s from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/posts/actions";

const Menu = ({ stateBlock, stateButton, changeState }) => {
  return <aside className={s.aside}></aside>;
};

export default Menu;
