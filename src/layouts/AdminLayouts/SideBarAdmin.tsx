import { ReactNode, useState } from "react";
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import './main.scss';

const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const SideBarAdmin = ({collapsed, SetCollapsed}: {collapsed: boolean, SetCollapsed: any}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  
  return (
        <Sider style={{ 
          background: colorBgContainer,
          overflow: 'auto' ,
          height: '100vh',
          position: 'fixed',
          }} width={200} trigger={null} collapsible collapsed={false}>

        <div className="demo-logo-vertical">
  <h2>Menu</h2>
</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={items2}
            theme="light"
          />
        </Sider>
  );
};

export default SideBarAdmin;
