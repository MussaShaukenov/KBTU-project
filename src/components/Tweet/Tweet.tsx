import React from "react";
import { Input } from 'antd';
import './Tweet.scss';
import LayoutContainer from "../MainPage/LayoutContainer";

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
};

const Tweet = () => {
    return (
        <LayoutContainer>
            <div className="tweet-container">
                <div>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Mona_Lisa.PNG"
                        alt=""
                    />
                </div>
                <div>
                    <TextArea
                        showCount
                        maxLength={140}
                        style={{ height: 120, width: 200, marginBottom: 24 }}
                        onChange={onChange}
                        placeholder="What's happening?!"
                    />
                </div>
            </div>
        </LayoutContainer>
    );
}

export default Tweet;
