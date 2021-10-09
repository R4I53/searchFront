import * as types from "./types";
import { authHost } from "../../api/ApiConfig";

const actions = {
  setTitleImg: (img) => ({
    type: types.SET_TITLE_IMG,
    img,
  }),
  setTitleImgPreview: (img) => ({
    type: types.SET_TITLE_IMG_PREVIEW,
    img,
  }),

  setTitle: (title) => ({
    type: types.SET_TITLE,
    title,
  }),
  setText: (text) => ({
    type: types.SET_TEXT,
    text,
  }),
  setImages: (img) => ({
    type: types.SET_IMAGES,
    img,
  }),
  setImagesPreview: (img) => ({
    type: types.SET_IMAGES_PREVIEW,
    img,
  }),
  deleteImagesPreview: () => ({
    type: types.DELETE_IMAGES_PREVIEW,
  }),

  setCategory: (category) => ({
    type: types.SET_CATEGORY,
    category,
  }),
  setStatus: (status) => ({
    type: types.SET_STATUS,
    status,
  }),

  createTitleImg: (img) => (dispatch) => {
    return dispatch(actions.setTitleImg(img));
  },
  createImages: (images) => (dispatch) => {
    for (const img in images) {
      dispatch(actions.setImages(images[img]));
    }
  },

  createImagesPreview: (files, fn) => (dispatch) => {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(fn(e.target.result));
      };
      reader.readAsDataURL(file);
    }
  },

  createPost: (titleImg, title, text, images, category) => async (dispatch) => {
    try {
      const config = {
        header: { "content-type": "multypart/form-data" },
      };
      const data = new FormData();

      data.append("titleImg", titleImg);
      data.append("title", title);
      data.append("text", text);
      data.append("category", category);

      for (let key in images) {
        console.log(images[key]);
        data.append("images", images[key]);
      }

      await authHost.post("/api/post", data, config);

      return dispatch(actions.setStatus(true));
    } catch ({ response: { data } }) {
      return dispatch(actions.setStatus(false));
    }
  },

  getPost: (id) => async (dispatch) => {
    try {
      const { data } = await authHost.get(`/api/post/${id}`);
      dispatch(
        actions.setTitleImgPreview(
          `${process.env.REACT_APP_API_URL}/${data.titleImg}`
        )
      );
      dispatch(actions.setTitle(data.title));
      dispatch(actions.setText(data.text));
      for (let img in data.images) {
        dispatch(
          actions.setImagesPreview(
            `${process.env.REACT_APP_API_URL}/${data.images[img].url}`
          )
        );
      }

      dispatch(actions.setCategory(data.category));
    } catch (e) {
      console.log(e);
    }
  },
  deletePost: (id) => async (dispatch) => {
    try {
      const { data } = await authHost.delete(`/api/post/${id}`);
      return console.log(data);
    } catch (e) {
      return dispatch(actions.setError(true));
    }
  },
  updatePost:
    (id, titleImg, title, text, images, category) => async (dispatch) => {
      try {
        const config = {
          headers: { "content-type": "multypart/form-data" },
        };

        const data = new FormData();
        data.append("titleImg", titleImg);
        data.append("title", title);
        data.append("text", text);
        data.append("category", category);

        for (let key in images) {
          data.append("images", images[key]);
        }

        await authHost.put(`/api/post/${id}`, data, config);
        
        return dispatch(actions.setStatus(true));
      } catch (e) {
        return dispatch(actions.setStatus(false));
      }
    },
};

export default actions;
