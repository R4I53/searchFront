import React from "react";
import { Result, Button, Layout } from "antd";
import { useTransition } from "react-spring";
import { Switch, Route, Link, useLocation } from "react-router-dom";

import PrivateRoute from "../utils/PrivateRoute";
import Auth from "../pages/Auth";
import Main from "../pages/Main";
import Header from "./header/Header";
import Post from "../pages/Post";
import Menu from "./menu/MenuContainer";

import PostCreate from "./admin-panel/post-create/PostCreate";
import PostsList from "./admin-panel/post-update/PostsList";
import PostItem from "./admin-panel/post-update/PostItem";
import AdminMenu from "./admin-panel/menu/AdminMenu";

const { Sider, Content } = Layout;

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute exact path="/" component={Main} exact />
        <PrivateRoute exact path="/post/:id" component={Post} />

        <Route
          path="/admin-994545"
          render={({ match: { url } }) => (
            <Layout>
              <Sider>
                <AdminMenu />
              </Sider>
              <Layout>
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
        />
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
      </Switch>
    </>
  );
};

export default Routes;
