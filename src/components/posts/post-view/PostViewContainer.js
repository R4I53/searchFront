import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import PostView from "./PostView";
import actions from "../../../redux/posts/actions";

const PostViewContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const images = useSelector((state) => state.post.post.images);

  const changeText = (node, text) => {
    if (node) return (node.innerHTML = text);
  };

  React.useEffect(() => {
    dispatch(actions.getPost(id));
  }, []);

  const props = { post, images, changeText };

  return <PostView {...props} />;
};

export default PostViewContainer;
