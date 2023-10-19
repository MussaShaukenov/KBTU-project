import React, {useState} from 'react';
import {Button, Input, Space} from 'antd';
import {MoreOutlined} from '@ant-design/icons';
import {SearchProps} from "antd/lib/input";
import "./Sidebar.scss"
import {SizeType} from "antd/lib/config-provider/SizeContext";

const {Search} = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Sidebar: React.FC = () => {
    const [size, setSize] = useState<SizeType>('large');

    return (
        <div className="full-height-sidebar">
            <div className="left-sidebar-container"></div>
            <div className="centre-sidebar-container">
                <div><Search placeholder="Search" onSearch={onSearch} enterButton/></div>
                <div>
                    <div className="subscribe-ad">
                        <div className="inner-container">
                            <div><h2>Subscribe to Premium</h2></div>
                            <div><h4>Subscribe to unlock new features and if <br/> eligible, receive a share of ads
                                revenue.</h4></div>
                            <div>
                                <button type="submit">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="trends">
                        <div><h2>Trends for you</h2></div>
                        <div className="trend-container">
                            <div><p>Trending</p></div>
                            <div><h3>The GOAT</h3></div>
                            <div><p>29.9 K posts</p></div>
                        </div>
                        <div className="trend-container">
                            <div><p>Trending </p></div>
                            <div><h3>Elon Musk</h3></div>
                            <div><p>12.3 K posts</p></div>
                        </div>
                        <div className="trend-container">
                            <div><p>Trending</p></div>
                            <div><h3>Google</h3></div>
                            <div><p>3.9 K posts</p></div>
                        </div>
                        <div className="trend-container">
                            <div><p>Trending</p></div>
                            <div><h3>BBC</h3></div>
                            <div><p>53.9 K posts</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-sidebar-container"></div>
        </div>
    );
};

export default Sidebar;