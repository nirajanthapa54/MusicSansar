import React, { useState } from 'react';

import {
  Layout,
  Menu,
  theme,
} from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import { BsDashSquare } from 'react-icons/bs';
import {
  FaHome,
  FaSearch,
} from 'react-icons/fa';
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: {colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">MS</span>

           <span className="lg-logo"> <img src="/image.jpg" className='photo' height={50} width={50} alt=""/>MusicSansar</span>
          </h2>
        </div>
        <br/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <BsDashSquare className="fs-4" />,
              label: "Cover",
            },

            {
              key: "home",
              icon: <FaHome className="fs-4" />,
              label: "Home",
            },
            {
              key: "Search",
              icon: <FaSearch className="fs-4" />,
              label: "search",
            },
            {
              key: "Upload",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Alblum Details",
            },
          
            
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;