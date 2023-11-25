import {MoreOutlined} from "@ant-design/icons";
import React, {useEffect} from "react";
import useUserTweets from "./TweetHook";
import useUserProfile from "../Profile/ProfileHook";

const TweetBody = () => {
    const userId = '1';
    const tweets = useUserTweets(userId);
    const profileData = useUserProfile(userId);

    useEffect(() => {}, [tweets, profileData]);

    return (
        <>
        {profileData.tweets.map((tweet) => (
                <div key={tweet['id']} className="tweet-container-col">
                    <div className="tweet-header">
                        {profileData.avatar ? (
                            <img src={profileData.avatar} alt=""/>
                        ) : (
                            <img src="https://i.pinimg.com/originals/73/da/a7/73daa7f1cf553a591065209b0e217254.jpg"
                                 alt=""/>
                        )}
                        <div className="tweet-container-row">
                            <div><strong>{profileData.firstName} {profileData.lastName}</strong>
                                <span> {profileData.username} | {tweet['created_at']}</span></div>
                            <div>{tweet['content']}</div>
                        </div>
                    </div>
                    <div className="tweet-actions">
                        <MoreOutlined/>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TweetBody;