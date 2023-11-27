import React from "react";
import allTweets from "../../api/allTweets";
import {MoreOutlined} from "@ant-design/icons";
import {profile_default_avatar} from "../../constants/profile";

const AllTweetsBody: React.FC = () => {
    const tweetsData = allTweets();

    return (
        <div>
            {tweetsData.map((tweet) => (
                <div key={tweet['id']} className="tweet-container-col">
                    <div className="tweet-header">
                        {tweet.user.avatar ? (
                            <img src={tweet.user.avatar} alt=""/>
                        ) : (
                            <img src={profile_default_avatar} alt=""/>
                        )}
                        <div className="tweet-container-row">
                            <div><strong>{tweet.user.first_name} {tweet.user.last_name}</strong>
                                <span> {tweet.user.username} | {tweet.created_at}</span></div>
                            <div>{tweet.content}</div>
                        </div>
                    </div>
                    <div className="tweet-actions">
                        <MoreOutlined/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllTweetsBody;
