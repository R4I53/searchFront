import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Result, Button, Layout } from "antd";

import PrivateRoute from "../utils/PrivateRoute";
import AdminMenu from "./admin-panel/menu/AdminMenu";
import PostCreate from "./admin-panel/post-create/PostCreate.jsx";
import PostsList from "./admin-panel/post-update/PostsList";
import PostItem from "./admin-panel/post-update/PostItem";
import MainContents from "./main-contents/MainContents";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

import s from "./App.module.scss";

const { Sider, Content } = Layout;

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute exact path="/" component={Main} />
        {/* <Route
          path="/admin-994545"
          render={({ match: { url } }) => (
            <Layout>
              <Sider>
                <AdminMenu />
              </Sider>
              <Layout className={s.admin}>
                <Content>
                  <Switch>
                    <PrivateRoute
                      path={`/admin-994545`}
                      component={PostCreate}
                      exact
                    />
                    <PrivateRoute
                      path={`${url}/update`}
                      component={PostsList}
                      exact
                    />
                    <PrivateRoute
                      path={`${url}/update/:id`}
                      component={PostItem}
                    />
                  </Switch>
                </Content>
              </Layout>
            </Layout>
          )}
        /> */}
        {/* <Route
          render={() => (
            <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
              <Result
                status="404"
                title="404"
                subTitle="Такой страницы нет"
                extra={
                  <Button type="primary">
                    <Link to={"/"}>Назад</Link>
                  </Button>
                }
              />
            </div>
          )}
        /> */}
      </Switch>
    </>
  );
};

export default AppRouter;
