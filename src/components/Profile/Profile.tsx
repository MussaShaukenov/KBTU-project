import React from 'react';
import "./Profile.scss"
import { ArrowLeftOutlined, CalendarOutlined} from '@ant-design/icons';
import {Tabs} from "antd";
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: 'posts',
        label: 'Posts',
        children: 'Content of Tab Pane 1',
    },
    {
        key: 'replies',
        label: 'Replies',
        children: 'Content of Tab Pane 2',
    },
    {
        key: 'highlights',
        label: 'Highlights',
        children: 'Content of Tab Pane 3',
    },
    {
        key: 'media',
        label: 'Media',
        children: 'Content of Tab Pane 4',
    },
    {
        key: 'likes',
        label: 'Likes',
        children: 'Content of Tab Pane 5',
    },
];

const Profile: React.FC = () => (
    <div className="profile-container">
        <div className="profile-return">
            <div><ArrowLeftOutlined /></div>
            <div className="profile-header">
                <div><h2>Mussa Shaukenov (themussa)</h2></div>
                <div><p>0 posts</p></div>
            </div>
        </div>
        <div className="profile-main">
            {/*<div className="profile-background"></div>*/}
            <div className="profile-avatar"></div>
            <div><h3>Mussa Shaukenov (themussa)</h3></div>
            <div>@MThemussa</div>
            <div><CalendarOutlined /> Joined March 2023</div>
            <div className="profile-follower-info">
                <div><span>345</span> Following</div>
                <div><span>12042</span> Followers</div>
            </div>
            <div className="profile-tabs">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    </div>
);

export default Profile;