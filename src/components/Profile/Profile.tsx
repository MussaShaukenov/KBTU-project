import React from 'react';
import "./Profile.scss"
import {EnvironmentFilled, CalendarOutlined} from '@ant-design/icons';
import LayoutContainer from "../MainPage/LayoutContainer";
import {useEffect} from "react";
import EditProfile from "./EditProfile";
import {Tabs} from "antd";
import profile from "../../api/profile";
import {profile_default_avatar} from "../../constants/profile";
import {profile_default_background} from "../../constants/profile";
import AllTweetsBody from "../Tweet/TweetsBody";

export const profile_tabs = [
    {
        key: '1',
        label: 'Tweets',
        children: <AllTweetsBody/>
    },
    {
        key: '2',
        label: 'Tab 2',
        children: "lol"
    },
    {
        key: '3',
        label: 'Tab 3',
        children: "content of tab 3"
    },
];


const Profile: React.FC = () => {
    const userId = '4'; // Replace with the actual user ID
    const profileData = profile(userId);
    useEffect(() => {
    }, [profileData]);

    return (
        <LayoutContainer>
            <div className="profile-container">
                <div className="middlecontainer">
                    <section className="twitterprofile">
                        <div className="headerprofileimage">
                            <img
                                src={profile_default_background}
                                alt="header" id="headerimage"/> {profileData.avatar ? (
                            <img src={profileData.avatar} alt="profile pic"/>
                        ) : (
                            <img
                                src={profile_default_avatar}
                                alt="default profile pic" id="profilepic"/>
                        )}
                            <EditProfile/>
                        </div>
                        <div className="bio">
                            <div className="profile-name">
                                <div>{profileData.firstName} {profileData.lastName} ({profileData.username})</div>
                                <div><p>{profileData.username}</p></div>
                            </div>
                            <div className="handle">
                                <div><p>{profileData.bio}</p></div>
                                <div className="location-join-info">
                                    <div><EnvironmentFilled/> {profileData.location}</div>
                                    <div><CalendarOutlined/> Joined {profileData.joined}</div>
                                </div>
                            </div>
                            <br/>
                            <div className="nawa">
                                <div className="followers"> 845 <span>Following</span></div>
                                <div>3802<span> Followers</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="tweets">
                        <Tabs defaultActiveKey="1" items={profile_tabs}/>
                    </section>
                </div>
            </div>
        </LayoutContainer>
    );
}

export default Profile;