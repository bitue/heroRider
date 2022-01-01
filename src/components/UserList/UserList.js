import React from 'react';

const UserList = ({data}) => {
    console.log(data)
    const {email, fullName, phone ,role,age} = data
    return (
        <div className='flex justify-evenly items-center text-right'>
            <p className='text-left'>{email}</p>
            <p className='text-left'>{fullName}</p>
            <p className='text-left'>{phone}</p>
            <p className='text-left'>{role}</p>
            <p className='text-left'>{age}</p>
            
        </div>
    );
};

export default UserList;