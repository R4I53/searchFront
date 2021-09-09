import * as types from "./types";

const initialState = {
  post: {
    titleImg: "",
    title: "",
    text: "",
    images: [],
  },
  names: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POST:
      return {
        ...state,
        post: action.post,
      };
    case types.SET_NAME_POSTS:
      return {
        ...state,
        names: action.names,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
