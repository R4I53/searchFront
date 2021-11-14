import React from "react";
import { useHistory } from "react-router-dom";
import { useActive } from "../../hooks/useActive";
import { useDispatch, useSelector } from "react-redux";

import AuthForm from "./AuthForm";
import actions from "../../redux/auth/actions";

import iconDefault from "../../assets/img/arrow-min.svg";
import iconActive from "../../assets/img/Vector.svg";

const AuthFormContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.auth.isError);
  const { icon, onMouseOver, onMouseOut } = useActive(
    false,
    iconDefault,
    iconActive
  );

  const [password, setPassword] = React.useState("");

  //   React.useEffect(async () => {
  //     const status = await dispatch(actions.check());
  //     if (status) return setLoading(false);
  //     await setLoading(false);
  //     return history.push("/auth");
  //   }, [dispatch]);

  const login = async (pass) => {
    const status = await dispatch(actions.login(pass));
    if (status) {
      history.push("/");
    }
  };

  const onKeyDownAuth = (e, login, password) => {
    if (e.keyCode === 13) {
      return login(password);
    }
  };

  const props = {
    icon,
    onMouseOver,
    onMouseOut,
    password,
    setPassword,
    login,
    onKeyDownAuth,
  };

  return <AuthForm {...props} />;
};

export default AuthFormContainer;
