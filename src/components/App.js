import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import actions from "../redux/auth/actions";
// import "./normalize.scss";
import "antd/dist/antd.css";
import s from "./App.module.scss";
import AppRouter from "./AppRouter";

import "../assets/scss/_normalize.scss";
import BGLayout from "../layout/bg-layout/BGLayout";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(actions.check()).finally(() => setLoading(false));
  }, [dispatch]); //каждый раз при обновлении страницы

  React.useEffect(() => console.log(process.env.REACT_APP_API_URL));

  React.useEffect(() => {
    const head = document.getElementsByTagName("head")[0];

    const threeScript = document.createElement("script");
    threeScript.id = "threeScript";
    threeScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";

    head.appendChild(threeScript);

    return () => threeScript && threeScript.remove();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <BGLayout>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </BGLayout>
  );
}

export default App;
