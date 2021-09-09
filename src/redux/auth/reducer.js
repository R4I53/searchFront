 import {SET_IS_AUTH,SET_IS_ERROR} from "./types";

const initialState = {
  isAuth: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.auth,
      };

    case SET_IS_ERROR:
      return {
        ...state,
        isError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
