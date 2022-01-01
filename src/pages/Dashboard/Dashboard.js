import React, { useContext } from 'react';
import AdminProfile from '../../components/AdminProfile/AdminProfile';
import Nav from '../../components/Nav/Nav';
import UserProfile from '../../components/UserProfile/UserProfile';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {user, logOut, admin} = useAuth()
    console.log(user)

    const handleLogout = ()=> {
        logOut()
    }
    return (
        <div>
            <Nav></Nav>
         
                <div className=' '>
                    <h1 className='font-bold text-2xl text-blue-500 text-center my-5'> Welcome to {user.email} profile page </h1>

                    <button className='bg-blue-500 px-4 py-1 rounded-2xl ' onClick={handleLogout} >Sign out</button>

                </div>
                {
                    admin ?  <div className=''>
                    <AdminProfile></AdminProfile>
                </div> : <UserProfile></UserProfile>
                }

               

        
           
           
        </div>
    );
};

export default Dashboard;