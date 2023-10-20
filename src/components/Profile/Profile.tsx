import React from 'react';
import "./Profile.scss"
import {EnvironmentFilled, CalendarOutlined} from '@ant-design/icons';
import {Tabs} from "antd";
import type {TabsProps} from 'antd';
import LayoutContainer from "../MainPage/LayoutContainer";
import Post from "../Post/Post";

const onChange = (key: string) => {
    console.log(key);
};

const postThreeProps = {
    authorLogo: "https://pbs.twimg.com/profile_images/693731557299720193/z0EeBAZE_400x400.png",
    author: 'ESPN UK',
    time: 'Oct 18',
    content: "Which midfield trio are you taking? 🤔",
    imageUrl: "https://pbs.twimg.com/media/F8vCTkKX0AE9CPe?format=jpg&name=medium",
    comments: 1022,
    shares: 1200,
    likes: 25.2,
}

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

const Profile: React.FC = () => {
    return (
        <LayoutContainer>
            <div className="profile-container">
                <div className="middlecontainer">
                    <section className="headsec">
                        <div>
                            <h3>Mussa Shaukenov</h3>
                            <span>934 Tweets</span>
                        </div>
                    </section>
                    <section className="twitterprofile">
                        <div className="headerprofileimage">
                            <img
                                src="https://marketplace.canva.com/EAFK_XV_Ht8/1/0/1600w/canva-black-typographic-retro-moon-and-astronaut-twitter-header-0NTqoXhUtsE.jpg"
                                alt="header" id="headerimage"/>
                            <img
                                src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/elon-musk-twitter-0405221.jpg"
                                alt="profile pic" id="profilepic"/>
                            <div className="editprofile">Edit Profile</div>
                        </div>
                        <div className="bio">
                            <div className="profile-name">
                                <div>Mussa Shaukenov (themussa)</div>
                                <div><p>@Mthemussa</p></div>
                            </div>
                            <div className="handle">
                                <div><p>MSc in SWE, Software Engineer</p></div>
                                <div className="location-join-info">
                                    <div><EnvironmentFilled/> Almaty, Kazakhstan</div>
                                    <div><CalendarOutlined/> Joined March 2023</div>
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
                        <div className="heading">
                            <p>Tweets</p>
                            <p>Tweets and Replies</p>
                            <p>Media</p>
                            <p>Likes</p>
                        </div>
                    </section>

                    <section className="mytweets">
                        <div>
                            <img
                                src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/elon-musk-twitter-0405221.jpg"
                                alt="avi" className="avi"/>
                        </div>
                        <div className="tweetbody">
                            <Post {...postThreeProps}
                                />
                        </div>
                    </section>
                </div>
            </div>
        </LayoutContainer>
    );
}

export default Profile;