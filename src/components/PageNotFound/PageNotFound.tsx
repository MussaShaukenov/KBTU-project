import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';

const PageNotFound: React.FC = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleBackHome = () => {
        navigate('/home'); // Navigate to the '/home' URL
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={handleBackHome}>
                    Back Home
                </Button>
            }
        />
    );
};

export default PageNotFound;
