import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";
import {LaptopOutlined,NotificationOutlined, UserOutlined,CarOutlined,ProfileOutlined, MoneyCollectOutlined, DashboardOutlined,} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./main.scss";
import Title from "antd/es/typography/Title";
import RouterConfigs from "../../configs";
import GetItem from "../../commons/helpers/functions/GetItem";
import { log } from "console";
type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Footer, Sider } = Layout;



//#region Define Menu
const items2 = [
  GetItem(
    "Dashboard",
    RouterConfigs.adminRouters.home,
    <DashboardOutlined />,
  ),

  GetItem(
    "Quản lý tài khoản",
    "1",
    <UserOutlined />,
    [
      GetItem("Danh sách tài khoản",  RouterConfigs.adminRouters.manageAccount, ),
      GetItem("Thống kê tài khoản",  '1-1', ),
    ],
  ),
  GetItem(
    "Quản lý nhà xe",
    "2",
    <ProfileOutlined />,
    [
      GetItem("Danh sách nhà xe",  RouterConfigs.adminRouters.manageCompany, ),
      GetItem("Thống kê nhà xe",  '2-1', ),
    ],
  ),

  GetItem(
    "Quản lý loại xe",
    "3",
    <CarOutlined />,
    [
      GetItem("Danh sách loại xe",  RouterConfigs.adminRouters.manageBusType, ),
      GetItem("Thống kê loại xe",  '3-1', ),
    ],
  ),

  GetItem(
    "Quản lý ghế",
    "4",
    <CarOutlined />,
    [
      GetItem("Danh sách loại ghế",  RouterConfigs.adminRouters.manageSeatType, ),
      GetItem("Thống kê loại ghế",  '4-1', ),
    ],
  ),

  GetItem(
    "Quản lý bến bãi",
    "5",
    <img src="https://cdn5.vectorstock.com/i/1000x1000/96/84/bus-station-icon-in-black-bus-symbol-vector-23369684.jpg" style={{width: "25px", height: "25px"}} />,
    [
      GetItem("Danh sách bến bãi",  RouterConfigs.adminRouters.manageStation, ),
      GetItem("Thống kê bến bãi",  '5-1', ),
    ],
  ),

  GetItem(
    "Quản lý bảng giá",
    "6",
    <MoneyCollectOutlined />,
    [
      GetItem("Danh sách bảng giá",  RouterConfigs.adminRouters.prices, ),
      GetItem("Thống kê bảng giá",  '6-1', ),
    ],
  ),

  GetItem(
    "Quản lý loại giá",
    "7",
    <MoneyCollectOutlined />,
    [
      GetItem("Danh sách loại giá",  RouterConfigs.adminRouters.priceClassification, ),
      GetItem("Thống kê loại giá",  '7-1', ),
    ],
  ),

  GetItem(
    "Quản lý tuyến đường",
    "8",
    <img src= "https://cdn2.iconfinder.com/data/icons/moscow-transport/100/__-512.png" alt="" style={{width: "25px", height: "25px"}}/>,
    [
      GetItem("Danh sách tuyến đường",  RouterConfigs.adminRouters.routes, ),
      GetItem("Thống kê tuyến",  '8-1', ),
    ],
  ),
];

//#endregion


const SideBarAdmin = ({collapsed, SetCollapsed,}: { collapsed: boolean; SetCollapsed: any;}) => {

  const location = useLocation();
  const selectMenu = items2.filter((item) => {
    if(item?.key === location.pathname) {
      return item.key
    }
    if (item && 'children' in item) {
      const child = item.children?.find((child) => child?.key === location.pathname);
      if (child) {
        return item.key;
      }
    }
    return null;
  });
  
  console.log(selectMenu)
  

  console.log(selectMenu);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  //#region Handle click menu
const handleClick = (e: any) => {
  console.log(e.key)
  navigate(e.key);
}
//#endregion Handel click menu
  return (
    <Sider
      style={{
        background: colorBgContainer,
        overflow: "auto",
        height: "100vh",
        position: "fixed",

      }}
      width={350}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="demo-logo-vertical">
        {!collapsed ? (
          <Title level={3} style={{ color: "Black", margin: 0, padding: 20 }}>
            Menu
          </Title>
        ) : (
          <Title
            level={3}
            style={{ color: "Black", margin: 0, padding: 30 }}
          ></Title>
        )}
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[selectMenu[0]?.key ? selectMenu[0].key.toString(): '1']}
        style={{ height: "100%"}}
        items={items2}
        theme="light"
        onClick={(e) => {handleClick(e)}}
      />
    </Sider>
  );
};

export default SideBarAdmin;
