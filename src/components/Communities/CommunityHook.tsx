import { useState, useEffect } from 'react';
import axios from 'axios';

interface Community {
    id: number;
    name: string;
    description: string;
    created_at: string;
    is_private: boolean;
    is_active: boolean;
    number_of_posts: number;
    image: string;
    category: number;
    members: number[];
}

const useCommunity = () => {
    const [communityData, setCommunityData] = useState<Community[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/communities/`, { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                setCommunityData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return communityData;
};

export default useCommunity;
