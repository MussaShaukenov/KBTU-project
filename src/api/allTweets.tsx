import { useState, useEffect } from 'react';
import axios from 'axios';
import {TWEET_URL} from "./axios";

interface Profile {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    avatar: string | null;
}

interface Tweet {
    id: number;
    content: string;
    created_at: string;
    user: Profile;
}

const useTweets = () => {
    const [tweetsData, setTweetsData] = useState<Tweet[]>([]);

    useEffect(() => {
        axios.get(TWEET_URL, { withCredentials: true })
            .then((response) => {
                console.log("ALL TWEETS DATA", response.data);
                setTweetsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return tweetsData;
};

export default useTweets;
