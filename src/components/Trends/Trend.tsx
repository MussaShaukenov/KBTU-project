import React from "react";

interface TrendProps {
    category: string;
    title: string;
    posts: string;
}

const Trend: React.FC<TrendProps> = ({ category, title, posts }) => (
    <div className="trend-container">
        <p>{category}</p>
        <h4>{title}</h4>
        <p>{posts}</p>
    </div>
);

export default Trend;