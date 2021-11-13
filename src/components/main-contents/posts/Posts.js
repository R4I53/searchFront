import React from "react";
import s from "./Posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import actions from "../../../redux/posts/actions";

import PostMain from "./post-main/PostMain";
import PostItem from "./post-item/PostItem";

const Posts = () => {
  return (
    <section className={s.posts}>
      <PostMain />
      <div className={s.container}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </section>
  );
};

export default Posts;
