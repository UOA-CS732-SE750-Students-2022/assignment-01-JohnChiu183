import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './App.css';
import AddMemberPage from './pages/AddMemberPage';
import MemberViewPage from './pages/MembersViewPage';
import { Route, Routes, NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import NoSuchPage from './pages/NoSuchPage';




function App() {
  let navigate = useNavigate(); 
  const { Header, Content, Footer } = Layout;
  const breadcrumbNameMap = {
    '/': 'Home (Member Management)',
    '/addMember': 'Create Members',
  };

  const selectedKeyMap = {
    '/': 'menu1',
    '/addMember': 'menu2'
  };

  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const breadcrumbItems = pathArray.map((_,index) =>{
    const url = `${pathArray.slice(0, index + 1).join('/')}`;
    return(
      <Breadcrumb.Item key={url}>
        <NavLink to={url}>{breadcrumbNameMap[url]}</NavLink>
      </Breadcrumb.Item>
    );
  });




const currentMenu = selectedKeyMap[location.pathname];



  return (

    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={currentMenu}>
          <Menu.Item key='menu1'>
            <NavLink to="/">Member Management</NavLink>
          </Menu.Item>
          <Menu.Item key='menu2'>
            <NavLink to="addMember">Create Members</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {breadcrumbItems}
        </Breadcrumb>
        <div className="site-layout-content">
          <Routes>
            <Route path="/">
              <Route index element={<MemberViewPage />} />
              <Route path="addMember" element={<AddMemberPage />}/>
              <Route path="*" element={<NoSuchPage />}/>
            </Route>
          </Routes>
        </div>
      </Content>
    <Footer style={{ textAlign: 'center' }}>Super Company CRM Centre ©2022 Modified by John Chiu</Footer>
  </Layout>
  );
}

export default App;
