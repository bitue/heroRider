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
            <h1 className='font-bold text-2xl text-blue-500 text-center my-5'> Welcome to {user.email} profile page </h1>

            <button className='bg-blue-500 px-4 py-1 rounded-2xl ' onClick={handleLogout} >Sign out</button>
        </div>
    );
};

export default Dashboard;