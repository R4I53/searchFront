import * as types from "./types";
import { authHost } from "../../api/ApiConfig";

const actions = {
  setPost: (post) => ({
    type: types.SET_POST,
    post,
  }),

  setNamePosts: (names) => ({
    type: types.SET_NAME_POSTS,
    names,
  }),

  getNamePosts: () => async (dispatch) => {
    try {
      const { data } = await authHost.get("/api/post/names");
      console.log(data);
      return dispatch(actions.setNamePosts(data.postsName));
    } catch (e) {
      console.log(e);
    }
  },
  getPost: (id) => async (dispatch) => {
    try {
      const { data } = await authHost.get(`/api/post/${id}`);
      localStorage.setItem("postId", id);
      return dispatch(actions.setPost(data));
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
