import React, { useEffect, useRef } from 'react';

import { useState } from 'react/cjs/react.development';
import UserList from '../UserList/UserList';

const AdminProfile = () => {
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState(null)
    
    const [searchUsers, setSearchUsers] = useState('');
    const [filter, setFilter] = useState('');
    const searchRef = useRef()

    const handleSearch = (searchOption)=> {
        const value = searchRef.current.value;
        console.log(value, searchOption, searchUsers,'get them all');

        for(let i of searchUsers){
           if(i[searchOption] == value){
               console.log(i);
               setResult(i)
               console.log(result)
               console.log(1)
           }

        }
        
    }







    useEffect(()=> {
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            const searchUsers = [...data];
            setSearchUsers(searchUsers)
            console.log(searchUsers,'i');

            if(filter ==='' || filter ==='all'){
                setUsers(data) 
            }
            else if(filter === 'young'){

                const filteredData = data.filter(user => parseInt(user.age) >=18 && parseInt(user.age) <=25)
                console.log(1)
                setUsers(filteredData)
            }
            else if(filter === 'adult') {
                const filteredData = data.filter(user => parseInt(user.age) >=26 && parseInt(user.age) <=30)
                console.log(1)
                setUsers(filteredData)

            }
           
        })
    },[filter])
    return (
        <div>
            <h1> our total user lists {users.length}</h1>
            <div>
                <input ref={searchRef} className='w-1/2 px-2 py-1 rounded-2xl border-2 my-3'/> 
                <button onClick={()=>handleSearch('email')} className='bg-blue-500 px-3 py-1 rounded-2xl '>search by email</button>
                <button onClick={()=>handleSearch('phone')} className='bg-blue-500 px-3 py-1 rounded-2xl '>search by phone</button>
                <button onClick={()=>handleSearch('fullName')} className='bg-blue-500 px-3 py-1 rounded-2xl '>search by fullName</button>

            </div>
            <div>
                <h1>Search result shows here</h1>
                {
                    result ? <UserList data ={result}></UserList> : <p>No search found !</p>
                }
            </div>
            {/* search by email name phone */}
            <div>
                <button onClick={()=> setFilter('young')}>18-25</button>
                <button onClick={()=> setFilter('adult')}>26-30</button>
                <button onClick={()=> setFilter('all')}>all</button>
            </div>
            <div>
                {
                    users.map(user => <UserList data ={user}></UserList>)
                }
            
            </div>
        </div>
    );
};

export default AdminProfile;