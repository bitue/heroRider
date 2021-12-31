import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='bg-blue-500 px-4 py-3 flex justify-between items-center '>
                <div>
                    <NavLink to='/'><h1 className='font-semibold text-3xl '>Hero Rider</h1></NavLink>
                </div>
                <div className='links flex justify-between space-x-5 items-center'>
                    <div>
                        <NavLink to='/signUp'>Sign up</NavLink>
                    </div>
                    <div>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Nav;