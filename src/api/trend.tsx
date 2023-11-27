import { useState, useEffect } from 'react';
import axios from 'axios';
import {TREND_URL} from "./axios";

interface Trend {
    name: string;
    category: string;
    number_of_tweets: number;
}

const useTrend = () => {
    const [trendData, setTrendData] = useState<Trend[]>([]);

    useEffect(() => {
        axios.get(TREND_URL, { withCredentials: true })
            .then((response) => {
                console.log("TREND DATA", response.data);
                setTrendData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return trendData;
};

export default useTrend;
