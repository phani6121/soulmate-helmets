import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashBoard: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let username = sessionStorage.getItem("username");
        if (username === "" || username === null) {
            navigate("/login");
        }
    });

    return (
        <h1>Dashboard</h1>
    );
};

export default DashBoard;
