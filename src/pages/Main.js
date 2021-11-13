import React from "react";

import Header from "../components/header/Header";
import ContainerLayout from "../layout/container-layout/ContainerLayout";
import Posts from "../components/main-contents/posts/Posts";

const Main = () => {
  return (
    <div>
      <ContainerLayout>
        <Header />
        <Posts />
      </ContainerLayout>
    </div>
  );
};

export default Main;
