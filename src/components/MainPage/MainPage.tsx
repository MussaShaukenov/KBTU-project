import React from 'react';
import Navbar from "../Navbar/Navbar";
import { Layout, Space } from 'antd';

const {
    Header,
        Footer,
        Sider,
        Content
    } = Layout;

// const headerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 64,
//     paddingInline: 50,
//     lineHeight: '64px',
//     backgroundColor: '#7dbcea',
// };
//
// const contentStyle: React.CSSProperties = {
//     textAlign: 'center',
//     minHeight: 120,
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#108ee9',
// };
// const footerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     backgroundColor: '#7dbcea',
// };

const MainPage: React.FC = () => (
    <Space direction="vertical" style={{width: '100%'}} size={[0, 48]}>
        <Layout>
            <Sider><Navbar /></Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </Space>
);

export default MainPage;