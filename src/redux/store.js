import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import auth from "./auth/reducer";
import post from "./posts/reducer";
import admin from "./admin/reducer";

const rootReducer = combineReducers({
  auth,
  post,
  admin,
});

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composedEnhancer);

window.store = store;

export default store;
