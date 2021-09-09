import Authorization from "./authorization/Authorization";
import MainContents from "./mainContents/MainContents";

export const ADMIN_ROUTE = "/admin-maroders";
export const POST_ROUTE = "/post";
export const AUTH_ROUTE = "/auth";

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    component: MainContents,
  },
  {
    path: POST_ROUTE,
    component: MainContents,
  },
];

export const publickRoutes = [
  {
    path: AUTH_ROUTE,
    component: Authorization,
  },
];
