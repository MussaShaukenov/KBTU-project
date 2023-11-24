import React, { ReactNode } from 'react';
import { Layout, Space } from 'antd';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

const contentStyle = {
    paddingTop: 25,
    minHeight: 120,
    color: '#fff',
    backgroundColor: 'black',
    width: '100%',
    marginLeft: "5.5em",
};

interface LayoutContainerProps {
    children: ReactNode; // Define the type for children
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => (
    // <Space direction="vertical" style={{ width: '100%' }}>
        <Layout style={{ width: "100%" }}>
            <Sider>
                <Navbar />
            </Sider>
            <Layout>
                <Content style={contentStyle}>{children}</Content>
            </Layout>
            <Sidebar />
        </Layout>
    // </Space>
);

export default LayoutContainer;
