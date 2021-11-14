import React from "react";

import Posts from "../components/posts/PostsContainer";
import Header from "../components/header/HeaderContainer";
import Menu from "../components/menu/MenuContainer";
import ContainerLayout from "../layout/container-layout/ContainerLayout";

const Main = () => {
  return (
    <>
      <Header />
      <Menu />
      <ContainerLayout>
        <Posts />
      </ContainerLayout>
    </>
  );
};

export default Main;
