import React from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function AdminMenu() {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
      width={"14%"}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
        <Menu.Item key="1">
          <Link to="/admin-994545">Создать</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin-994545/update">Редактировать</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/">Вернуться</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AdminMenu;
