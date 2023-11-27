import { useState, useEffect } from 'react';
import axios from 'axios';
import {PROFILE_URL} from "./axios";


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
    });

    useEffect(() => {
        axios.get(`${PROFILE_URL}/${userId}`, { withCredentials: true })
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
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    return profileData;
};

export default useUserProfile;