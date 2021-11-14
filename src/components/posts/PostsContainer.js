import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Posts from "./Posts";
import actions from "../../redux/posts/actions";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { posts, category } = post;

  React.useEffect(() => {
    dispatch(actions.getPosts());
    return console.log(posts);
  }, []);

  const props = { posts, category };

  return <Posts {...props} />;
};

export default PostsContainer;
