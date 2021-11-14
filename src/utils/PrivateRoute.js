import React from "react";
import { useHistory } from "react-router";
import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import actions from "../redux/auth/actions";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    const status = await dispatch(actions.check());

    if (status) {
      setLoading(false);
    } else {
      await setLoading(false);
      return history.push("/auth");
    }
  });

  return (
    <Route
      {...rest}
      render={(props) => (loading ? null : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;

