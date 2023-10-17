import React, {useState} from 'react';
import "./Navbar.scss"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SearchOutlined,
    BellOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    SettingOutlined,
    BookOutlined,
    RocketOutlined
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', 'home', <HomeOutlined/>),
    getItem('Explore', 'explore', <SearchOutlined/>),
    getItem('Notifications', 'notifications', <BellOutlined/>),
    getItem('Bookmarks', 'bookmarks', <BookOutlined/>),
    getItem('Communities', 'communities', <UsergroupAddOutlined/>),
    getItem('Premium', 'premium', <RocketOutlined/>),
    getItem('Profile', 'profile', <UserOutlined/>),
    getItem('Settings', 'Settings', <SettingOutlined/>),

];

const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="full-height-navbar">
            <Button type="primary" onClick={toggleCollapsed} style={{
                marginBottom: 16,
                background: "#1c9bef",
                height: "5vh",
            }}>
                {collapsed ? <RocketOutlined/> : <RocketOutlined/>}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    fontSize: 20,
                    backgroundColor: "black",
                    color: "white",
                }}

                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default Navbar;