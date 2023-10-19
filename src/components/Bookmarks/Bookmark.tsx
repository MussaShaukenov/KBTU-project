import React from 'react';
import "./Bookmark.scss"
import LayoutContainer from "../MainPage/LayoutContainer";

const Bookmark: React.FC = () => (
    <LayoutContainer>
        <div className="bookmark-container">
            <div><h1>Save posts for later</h1></div>
            <div><p>Bookmark posts to easily find them again in the future.</p></div>
        </div>
    </LayoutContainer>
);

export default Bookmark;
