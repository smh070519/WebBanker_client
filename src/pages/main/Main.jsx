import React from 'react';
import { useLocation } from 'react-router-dom';


const Main = () => {
    const location = useLocation();
    const {userName, message} = location.state || {}
    return (
        <div>
            <p>{userName}</p>
            <p>{message}</p>
        </div>
    );
};

export default Main;