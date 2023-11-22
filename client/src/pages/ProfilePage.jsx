import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate('/auth');
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/');
    };

    return <button onClick={handleLogout}>logout</button>;
};

export default ProfilePage;
