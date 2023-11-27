import React from "react";
import LayoutContainer from "../MainPage/LayoutContainer";
import Post from "../Post/Post";
import Tweet from "../Tweet/Tweet";
import TweetBody from "../Tweet/TweetBody";
import AllTweetsBody from "../Tweet/TweetsBody";


const HomePage: React.FC = () => {
    return (
        <LayoutContainer>
            <h2 style={{marginLeft: "1em"}}>Home</h2>
            <AllTweetsBody />
        </LayoutContainer>
    );
}

export default HomePage;