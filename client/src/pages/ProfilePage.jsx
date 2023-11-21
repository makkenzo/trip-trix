import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate('/auth');
        }
    }, []);

    return <div>ProfilePage</div>;
};

export default ProfilePage;
