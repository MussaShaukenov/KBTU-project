import React, { useState } from 'react';
import "./Notifications.scss";
import LayoutContainer from "../MainPage/LayoutContainer";

const Notifications: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <LayoutContainer>
            <h2>Notifications</h2>
            <div className="notification-container">
                <div
                    onClick={() => handleTabClick("All")}
                    className={activeTab === "All" ? "active" : ""}
                >
                    <p style={{ borderBottomColor: activeTab === "All" ? '#1c9bef' : 'transparent' }}>All</p>
                </div>
                <div
                    onClick={() => handleTabClick("Verified")}
                    className={activeTab === "Verified" ? "active" : ""}
                >
                    <p style={{ borderBottomColor: activeTab === "Verified" ? '#1c9bef' : 'transparent' }}>Verified</p>
                </div>
                <div
                    onClick={() => handleTabClick("Mentions")}
                    className={activeTab === "Mentions" ? "active" : ""}
                >
                    <p style={{ borderBottomColor: activeTab === "Mentions" ? '#1c9bef' : 'transparent' }}>Mentions</p>
                </div>
            </div>
            <div className="notification-text">
                <div><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg" alt=""/></div>
                <div><p>There was a login to your account @MThemussa from a new device on 17 окт. 2023 г.. Review it now.</p></div>
            </div>
            <div className="notification-text">
                <div><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg" alt=""/></div>
                <div><p>There was a login to your account @MThemussa from a new device on 14 окт. 2023 г.. Review it now.</p></div>
            </div>
            <div className="notification-text">
                <div><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg" alt=""/></div>
                <div><p>There was a login to your account @MThemussa from a new device on 13 окт. 2023 г.. Review it now.</p></div>
            </div>
            <div className="notification-text">
                <div><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg" alt=""/></div>
                <div><p>There was a login to your account @MThemussa from a new device on 11 окт. 2023 г.. Review it now.</p></div>
            </div>
            <div className="notification-text">
                <div><img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg" alt=""/></div>
                <div><p>There was a login to your account @MThemussa from a new device on 10 окт. 2023 г.. Review it now.</p></div>
            </div>
        </LayoutContainer>
    );
};

export default Notifications;
