import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserTweets = (userId: string) => {
    const [profileData, setProfileData] = useState({
        content: "",
        createdAt: "",
        data: [],
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/tweets/user/${userId}`, { withCredentials: true })
            .then((response) => {
                console.log("tweet data", response.data);
                setProfileData({
                    content: response.data.content,
                    createdAt: response.data.created_at,
                    data: [],
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    return profileData;
};

export default useUserTweets;
