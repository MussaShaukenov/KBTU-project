import React from "react";
import "./Trends.scss";
import Trend from "./Trend";

const trendsData = [
    { category: "News | Trending", title: "Gaza", posts: "2.3M posts" },
    { category: "Trending", title: "Веская причина бросить в клатче", posts: "1K posts" },
    { category: "News | Trending", title: "Hamas", posts: "1.3M posts" },
    { category: "Trending", title: "Танцы на Фурманова", posts: "1.3K posts" },
    { category: "Trending", title: "Как прыгнуть в окно красиво?", posts: "325 posts" },
    { category: "News | Trending", title: "#Israel", posts: "6M posts" },
    { category: "Trending in Science", title: "Drunk Newton", posts: "6.7K posts" },
    { category: "Trending", title: "The GOAT", posts: "29.9K posts" },
    { category: "Trending in Kazakhstan", title: "Интересно", posts: "3K posts" },
    { category: "Trending in Business & finance", title: "KPMG", posts: "2K posts" },
    { category: "Trending", title: "Abuja", posts: "38K posts" },
    { category: "Trending | Sports", title: "Bangladesh", posts: "103K posts" },
    { category: "Trending", title: "Naira", posts: "80K posts" },
];

const Trends: React.FC = () => (
    <div className="trends">
        <div>
            <h3>Trends for you</h3>
        </div>
        {trendsData.map((trend, index) => (
            <Trend key={index} {...trend} />
        ))}
    </div>
);

export default Trends;
