import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../redux/auth/actions";
// import "./normalize.scss";
import "antd/dist/antd.css";
import s from "./App.module.scss";
import AppRouter from "./AppRouter";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(actions.check()).finally(() => setLoading(false));
  }, [dispatch]); //каждый раз при обновлении страницы

  if (loading) {
    return null;
  }
  return (
    <div className={s.background}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
