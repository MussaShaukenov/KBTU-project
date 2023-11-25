import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserProfile = (userId: string) => {
    const [profileData, setProfileData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        bio: "",
        location: "",
        joined: "",
        password: "",
        tweets: [],
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/profiles/${userId}`, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                setProfileData({
                    username: response.data.username,
                    firstName: response.data.first_name,
                    lastName: response.data.last_name,
                    email: response.data.email,
                    avatar: response.data.avatar,
                    bio: response.data.bio,
                    location: response.data.location,
                    joined: response.data.created_at,
                    password: response.data.password,
                    tweets: response.data.tweets,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    return profileData;
};

export default useUserProfile;