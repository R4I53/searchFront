import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Result, Button, Layout } from "antd";

import PrivateRoute from "./PrivateRoute";
import AdminMenu from "./admin-panel/menu/AdminMenu";
import PostCreate from "./admin-panel/post-create/PostCreate.jsx";
import PostsList from "./admin-panel/post-update/PostsList";
import PostItem from "./admin-panel/post-update/PostItem";
import MainContents from "./mainContents/MainContents";
import Authorization from "./authorization/Authorization";

import s from "./App.module.scss";

const { Sider, Content } = Layout;

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Authorization} />
        <PrivateRoute exact path="/" component={MainContents} />
        <Route
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
                      path={`/admin-994545/`}
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
        />
        <Route
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
        />
      </Switch>
    </>
  );
};

export default AppRouter;
