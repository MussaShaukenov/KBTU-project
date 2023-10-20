import React from "react";

interface ExploreItemProps {
    imageUrl: string;
    name: string;
    handle: string;
}

const ExploreItem: React.FC<ExploreItemProps> = ({ imageUrl, name, handle }) => (
    <div className="explore-container-item">
        <div>
            <img src={imageUrl} alt="" />
        </div>
        <div className="item-text">
            <div>
                <p>{name}</p>
            </div>
            <div>{`@${handle}`}</div>
        </div>
        <div className="follow-button">
            <button>Follow</button>
        </div>
    </div>
);

export default ExploreItem;
