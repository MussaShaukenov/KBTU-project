import React from 'react';
import "./Community.scss"
import LayoutContainer from "../MainPage/LayoutContainer";
import CommunityBody from "./CommunityBody";


const Community: React.FC = () => (
    <LayoutContainer>
        <div className="community-container">
            <div><h3>Discover new communities</h3></div>
            <div><CommunityBody/> </div>
        </div>
    </LayoutContainer>
);

export default Community;