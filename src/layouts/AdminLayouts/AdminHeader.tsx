import React, { ReactNode, useState } from "react";
import {
    LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, Popconfirm, theme } from "antd";
import Title from "antd/es/typography/Title";

const { Header, Content, Footer, Sider } = Layout;


const AdminHeader = ({
  collapsed,
  SetCollapsed,
  children,
}: {
  collapsed: boolean;
  SetCollapsed: any;
  children: React.ReactNode;
}) => {
  const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


  return (
    <Layout style={{ marginLeft: 200, background: "#ffff" }}>
      <Header style={{ padding: 20 }} className="HeaderAdmin">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => SetCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <div>
          <Title level={3} style={{ color: "black" }}>
            Admin
          </Title>
        </div>

        <Popconfirm
                  open={open}
                  onConfirm={handleOk}
                  okButtonProps={{ loading: confirmLoading }}
                  onCancel={handleCancel} title={undefined}  >
    <Button 
    icon = {<LogoutOutlined />}
    onClick={showPopconfirm}
    ></Button>
  </Popconfirm>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default AdminHeader;
