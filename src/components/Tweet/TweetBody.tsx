import {MoreOutlined} from "@ant-design/icons";
import React, {useEffect} from "react";
import tweet from "../../api/tweet";
import useUserProfile from "../Profile/ProfileHook";
import {profile_default_avatar} from "../../constants/profile";

const TweetBody = () => {
    const userId = '1';
    const tweets = tweet(userId);
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
                            <img src={profile_default_avatar} alt=""/>
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