import * as types from "./types";

const initialState = {
  post: {
    titleImg: "",
    title: "",
    text: "",
    images: [],
  },

  posts: [],
  names: [],
  isActiveMenu: false,
  category: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POST:
      return {
        ...state,
        post: action.post,
      };
    case types.SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case types.SET_NAME_POSTS:
      return {
        ...state,
        names: action.names,
      };
    case types.SET_IS_ACTIVE_MENU:
      return {
        ...state,
        isActiveMenu: action.isActive,
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
