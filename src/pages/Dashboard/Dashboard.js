import React, { useContext } from 'react';
import Nav from '../../components/Nav/Nav';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Dashboard = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogout = ()=> {
        logOut()
    }
    return (
        <div>
            <Nav></Nav>
            <h1> this is dashboard pages</h1>

            <button onClick={handleLogout} >Sign out</button>
        </div>
    );
};

export default Dashboard;