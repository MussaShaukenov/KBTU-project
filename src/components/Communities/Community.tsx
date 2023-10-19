import React from 'react';
import "./Community.scss"
import LayoutContainer from "../MainPage/LayoutContainer";


const Community: React.FC = () => (
    <LayoutContainer>
        <div className="community-container">
            <div><h1>You haven’t joined any Communities yet</h1></div>
            <div><p>When you do, you’ll see their posts here.</p></div>
        </div>
    </LayoutContainer>
);

export default Community;