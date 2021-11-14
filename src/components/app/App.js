import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Routes from "../Routes";
import BGLayout from "../../layout/bg-layout/BGLayout";

import "antd/dist/antd.css";

// import "../../assets/scss/_variable.scss";
import "../../assets/scss/_normalize.scss";

const App = () => {
  return (
    <BGLayout>
      <Routes />
    </BGLayout>
  );
};

export default App;
