import * as types from "./types";

const initialState = {
  titleImg: "",
  titleImgPreview: "",
  title: "",
  text: "",
  images: [],
  imagesPreview: [],
  category: "2",
  status: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TITLE_IMG:
      return {
        ...state,
        titleImg: action.img,
      };
    case types.SET_TITLE_IMG_PREVIEW:
      return {
        ...state,
        titleImgPreview: action.img,
      };
    case types.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case types.SET_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case types.SET_IMAGES:
      return {
        ...state,
        images: [...state.images, action.img],
      };
    case types.SET_IMAGES_PREVIEW:
      return {
        ...state,
        imagesPreview: [...state.imagesPreview, action.img],
      };
    case types.DELETE_IMAGES_PREVIEW:
      return {
        ...state,
        imagesPreview: [],
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case types.SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
