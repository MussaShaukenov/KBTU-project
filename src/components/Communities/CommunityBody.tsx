// Update CommunityBody.tsx
import React from "react";
import useCommunity from "./CommunityHook";

const CommunityBody: React.FC = () => {
    const communityData = useCommunity();

    return (
        <div>
            {communityData.map((community) => (
                <div className="community-body-col" key={community.id}>
                    <div><img src={community.image} alt={community.name}/></div>
                    <div className="community-body-row">
                        <div><p>{community.name}</p></div>
                        <div><span>{community.number_of_posts}</span> posts | {community.category}</div>
                        <div>
                            <span>{community.members}</span>{" "}{community.members > [1] ? "members" : "member"}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommunityBody;
