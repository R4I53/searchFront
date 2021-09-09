import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { privateRoutes, publickRoutes, AUTH_ROUTE, POST_ROUTE } from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/auth/actions";
 import "./normalize.scss";
import s from "./App.module.scss";
import 'antd/dist/antd.css'

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.check());
  });

  return (
    <div className={s.background}>
      <BrowserRouter>
        {isAuth ? (
          <Switch>
            {privateRoutes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
            <Redirect to={POST_ROUTE} />
          </Switch>
        ) : (
          <Switch>
            {publickRoutes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
            <Redirect to={AUTH_ROUTE} />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
