import React, { useContext } from 'react';
import Nav from '../../components/Nav/Nav';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Nav></Nav>
            <h1> this is dashboard pages</h1>
        </div>
    );
};

export default Dashboard;