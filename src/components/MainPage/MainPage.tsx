import React from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Bookmark from "../Bookmarks/Bookmark";
import Community from "../Communities/Community";
import Profile from "../Profile/Profile";
import Register from "../Registration/Registration";
import Notifications from "../Notifications/Notifications";
import {Layout, Space} from 'antd';
import "./MainPage.scss"

const {
    Header,
    Footer,
    Sider,
    Content
} = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    paddingTop: 25,
    minHeight: 120,
    color: '#fff',
    backgroundColor: 'black',
};
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const MainPage: React.FC = () => (
        <Space direction="vertical" style={{width: '100%'}} size={[12, 48]}>
            <Layout>
                <Sider><Navbar/></Sider>
                <Layout>
                    <Content style={contentStyle}><Profile/></Content>
                </Layout>
                <Sidebar/>
            </Layout>
        </Space>
);

export default MainPage;