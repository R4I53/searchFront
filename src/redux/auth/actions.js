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
      const { data } = await host.post("api/authorization", { password });
      localStorage.setItem("token", data.token);
      dispatch(actions.setAuth(true));
    } catch (e) {
      console.log(e);
      dispatch(actions.setError(true));
    }
  },

  check: () => async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token)
      try {
        const { data } = await authHost.get("/api/authorization/check");
        return dispatch(actions.setAuth(data.isAuth));
      } catch (e) {
        console.log(e);
      }
  },
};

export default actions;
