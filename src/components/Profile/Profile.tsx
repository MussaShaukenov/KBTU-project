import React from 'react';
import "./Profile.scss"
import {EnvironmentFilled, CalendarOutlined} from '@ant-design/icons';
import LayoutContainer from "../MainPage/LayoutContainer";
import Post from "../Post/Post";
import {useEffect} from "react";
import EditProfile from "./EditProfile";
import useUserProfile from "./ProfileHook";


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
const Profile: React.FC = () => {
    const userId = '4'; // Replace with the actual user ID
    const profileData = useUserProfile(userId);
    useEffect(() => {}, [profileData]);

    return (
        <LayoutContainer>
            <div className="profile-container">
                <div className="middlecontainer">
                    <section className="twitterprofile">
                        <div className="headerprofileimage">
                            <img
                                src="https://marketplace.canva.com/EAFK_XV_Ht8/1/0/1600w/canva-black-typographic-retro-moon-and-astronaut-twitter-header-0NTqoXhUtsE.jpg"
                                alt="header" id="headerimage"/>
                            <img
                                src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/04/elon-musk-twitter-0405221.jpg"
                                alt="profile pic" id="profilepic"/>
                            <EditProfile />
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