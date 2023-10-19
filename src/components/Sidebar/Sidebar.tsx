import React from 'react';
import {Input} from 'antd';
import {SearchProps} from "antd/lib/input";
import "./Sidebar.scss"
import Trends from "../Trends/Trends";
import PremiumSubscribe from "../Premium/PremiumSubscribe";

const {Search} = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Sidebar: React.FC = () => {
    return (
        <div className="full-height-sidebar">
            <div className="centre-sidebar-container">
                <div><Search placeholder="Search" onSearch={onSearch} enterButton/></div>
                <br/> <br/>
                <div>
                  <PremiumSubscribe/>
                </div>
                <br/> <br/>
                <div>
                    <Trends/>
                </div>

            </div>
            <div className="right-sidebar-container"></div>
        </div>
    );
};

export default Sidebar;