import * as types from "./types";
import { authHost } from "../../api/ApiConfig";

const actions = {
  setPost: (post) => ({
    type: types.SET_POST,
    post,
  }),

  setPosts: (post) => ({
    type: types.SET_POSTS,
    post,
  }),

  setNamePosts: (names) => ({
    type: types.SET_NAME_POSTS,
    names,
  }),

  setActiveMenu: (isActive) => ({
    type: types.SET_IS_ACTIVE_MENU,
    isActive,
  }),

  setCategory: (category) => ({
    type: types.SET_CATEGORY,
    category,
  }),

  getNamePosts: () => async (dispatch) => {
    try {
      const { data } = await authHost.get("/api/post/names");
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

  getPosts: () => async (dispatch) => {
    try {
      const { data } = await authHost.get("/api/post/posts");
      return data.forEach((post) => dispatch(actions.setPosts(post)));
    } catch (e) {
      console.log(e);
    }
  },

  // changeActiveMenu: (isActive) => (dispatch) => {
  //   localStorage.setItem("isActiveMenu", isActive);
  //   return dispatch(actions.setActiveMenu(isActive));
  // },
};

export default actions;
