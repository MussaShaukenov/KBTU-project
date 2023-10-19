import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Navbar.scss';
import {
    HomeOutlined,
    SearchOutlined,
    BellOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    SettingOutlined,
    BookOutlined,
    RocketOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

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
    getItem('Home', 'home', <HomeOutlined />),
    getItem('Explore', 'explore', <SearchOutlined />),
    getItem('Notifications', 'notifications', <BellOutlined />),
    getItem('Bookmarks', 'bookmarks', <BookOutlined />),
    getItem('Communities', 'communities', <UsergroupAddOutlined />),
    getItem('Premium', 'premium', <RocketOutlined />),
    getItem('Profile', 'profile', <UserOutlined />),
    getItem('Settings', 'settings', <SettingOutlined />), // Corrected the key for 'Settings'
];

const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    // Function to navigate to the selected route
    const navigateToRoute = (route: string) => {
        navigate(route);
    };

    return (
        <div className="full-height-navbar">
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                    background: '#1c9bef',
                    height: '5vh',
                }}
            >
                {collapsed ? <RocketOutlined /> : <RocketOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['home']} // Set the default selected key to 'home'
                defaultOpenKeys={['sub1']}
                style={{
                    fontSize: 20,
                    backgroundColor: 'black',
                    color: 'white',
                }}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
                onSelect={({ key }) => {
                    // When a menu item is selected, navigate to the corresponding route
                    navigateToRoute(`/${key}`);
                }}
            />
        </div>
    );
};

export default Navbar;
