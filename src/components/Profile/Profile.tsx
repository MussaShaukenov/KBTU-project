import React from 'react';
import "./Profile.scss"
import { ArrowLeftOutlined, CalendarOutlined} from '@ant-design/icons';
import {Tabs} from "antd";
import type { TabsProps } from 'antd';
import LayoutContainer from "../MainPage/LayoutContainer";
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

const Profile: React.FC = () => {
    return (
    <LayoutContainer>
        <div className="profile-container">
            <div className="middlecontainer">
                <section className="headsec">
                    <div>
                        <h3>Soy Segun</h3>
                        <span>38.7k Tweets</span>
                    </div>
                </section>
                <section className="twitterprofile">
                    <div className="headerprofileimage">
                        <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="header" id="headerimage" />
                            <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="profile pic" id="profilepic" />
                                <div className="editprofile">Edit Profile</div>
                    </div>
                    <div className="bio">
                        <div className="handle">
                            <h3>Soy Segun</h3>
                            <span>@segun_OS</span>
                        </div>
                        <p>Business Administration Student |</p>
                        <p>Front-end web developer |</p>
                        <p>Barça fan |</p>
                        <span>@Awelagos @4topsports</span> <br />
                    <span>
                        <i className="fa fa-location-arrow "></i> Lagos, Nigeria. <a href="#">
                        <i className="fa fa-external-link" aria-hidden="true"></i>linkedin.com/in/segun-olani… </a>
                        <i className="fa fa-birthday-cake" aria-hidden="true"></i> Born November 10</span>
                        <br /> <span><i className="fa fa-calendar"></i> Joined May 2013</span>
                            <div className="nawa">
                                <div className="followers"> 421 <span>Following</span></div>
                                <div>1519<span> Followers</span></div>
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
                        <img src="https://res.cloudinary.com/dowrygm9b/image/upload/v1570267399/laptop-3174729_yiprzu.jpg" alt="avi" className="avi" />
                    </div>
                    <div className="tweetbody">
                        <div>Soy Segun @segun_OS - Feb. 11</div>
                        <div className="tweetcontent">Always check the replies for clarification before you retweet a tweet,
                            people<br /> deliberately mislead with their tweets.</div>
                        <ul className="retweeticons">
                            <i className="fa fa-comment" aria-hidden="true"></i>
                            <i className="fa fa-retweet" aria-hidden="true"></i>
                            <i className="fa fa-loveseat"></i>
                            <i className="fa fa-upload" aria-hidden="true"></i>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
            </LayoutContainer>
);
}

export default Profile;