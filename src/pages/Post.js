import React from "react";

import Header from "../components/header/HeaderContainer";
import Menu from "../components/menu/MenuContainer";
import PostView from "../components/posts/post-view/PostViewContainer";

const Post = () => {
  return (
    <div>
      <Header />
      <Menu />
      <PostView />
    </div>
  );
};

export default Post;
