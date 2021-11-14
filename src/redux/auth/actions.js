import { authHost, host } from "../../api/ApiConfig";
import { SET_IS_AUTH, SET_IS_ERROR } from "./types";

const actions = {
  setAuth: (auth) => ({
    type: SET_IS_AUTH,
    auth,
  }),
  setError: (error) => ({
    type: SET_IS_ERROR,
    error,
  }),
  login: (password) => async (dispatch) => {
    try {
      const { data } = await host.post("/api/authorization", { password });
      localStorage.setItem("token", data.token);
      dispatch(actions.setAuth(true));
      return true;
    } catch (e) {
      console.log(e);
      dispatch(actions.setError(true));
    }
  },

  check: () => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await authHost.get("/api/authorization/check");
        dispatch(actions.setAuth(data.isAuth));
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
