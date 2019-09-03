import * as React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
 class Home extends React.Component{
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed:any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  public render(){
    return  <div className="wrap">
    <div className="top">
        <h4>北京八维研究学院</h4>
        <p></p>
    </div>
    <Layout style={{ minHeight: '100vh' }}>
  <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
  
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            <span>试题管理</span>
          </span>
        }
      >
        <Menu.Item key="3">添加试题</Menu.Item>
        <Menu.Item key="4">试题分类</Menu.Item>
        <Menu.Item key="5">查看试题</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="team" />
            <span>用户管理</span>
          </span>
        }
      >
        <Menu.Item key="6">添加用户</Menu.Item>
        <Menu.Item key="8">用户展示</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="team" />
            <span>用户管理</span>
          </span>
        }
      >
        <Menu.Item key="10">添加考试</Menu.Item>
        <Menu.Item key="11">试卷列表 2</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="team" />
            <span>班级管理</span>
          </span>
        }
      >
        <Menu.Item key="12">班级管理</Menu.Item>
        <Menu.Item key="13">教室管理</Menu.Item>
        <Menu.Item key="14">学生管理</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub5"
        title={
          <span>
            <Icon type="team" />
            <span>阅卷管理</span>
          </span>
        }
      >
        <Menu.Item key="15">特批班级</Menu.Item>
        
      </SubMenu>
    </Menu>
  </Sider>
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }} />
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
</Layout>
</div>
  }
}
export default Home

// import React, { Component } from 'react'
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
// import '../../style/home.css'
// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// export default class home extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     return (
     
//     );
//   }
// }
