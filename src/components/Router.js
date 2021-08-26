import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authorization from "./authorization/Authorization";
import PrivateRoute from "../hoc/PrivateRoute";
import MainContents from "./mainContents/MainContents";
import s from "./App.module.scss";

function Router() {
  return (
    <div className={s.background}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={MainContents} />
          <Route path="/autorization" component={Authorization} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
