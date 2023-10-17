import React from 'react';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Bookmark from "../Bookmarks/Bookmark";
import { Layout, Space } from 'antd';
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
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
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
            <Sider><Navbar /></Sider>
            <Layout>
                {/*<Header style={headerStyle}>Header</Header>*/}
                <Content style={contentStyle}><Bookmark /></Content>
                {/*<Footer style={footerStyle}>Footer</Footer>*/}
            </Layout>
            <Sidebar/>
        </Layout>
    </Space>
);

export default MainPage;