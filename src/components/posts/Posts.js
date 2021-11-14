import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";

import PostMain from "./post-main/PostMain";
import PostItem from "./post-item/PostItem";
import actions from "../../redux/posts/actions";

import s from "./Posts.module.scss";

const Posts = ({ posts, category }) => {
  return (
    <section className={s.posts}>
      {/* <div
        className={s.overlay}
        style={{
         
        }}
      ></div> */}
      <PostMain />
      <div className={s.container}>
        {posts.map((post) => {
          if (category == 0) return <PostItem key={post.id} post={post} />;
          else {
            return (
              post.category == category && (
                <PostItem key={post.id} post={post} />
              )
            );
          }
        })}
      </div>
    </section>
  );
};

export default Posts;
