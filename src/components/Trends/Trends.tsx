import React, {useEffect} from "react";
import "./Trends.scss";
import useTrend from "../../api/trend";


const Trends: React.FC = () => {
    const trendData = useTrend();
    useEffect(() => {
    }, [trendData]);

    return (
        <div className="trends">
            <div>
                <h3>Trends for you</h3>
            </div>
            {trendData.map((trend) => (
                <div className="trend-container">
                    <p>Category: {trend.category}</p>
                    <h4>{trend.name}</h4>
                    <p>{trend.number_of_tweets} tweets</p>
                </div>
            ))}
        </div>
    );
};

export default Trends;
