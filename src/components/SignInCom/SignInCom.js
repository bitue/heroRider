import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignInCom = () => {
    const { register, handleSubmit } = useForm();
    const {signInEmailPass} = useContext(AuthContext);

    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/'
    const onSubmit = data => {
        signInEmailPass(data.email, data.password, history, uri)

       
        

       
    }
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center'>Sign in here </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            
                <input {...register("email")} type='email' placeholder='Enter email' required className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
                <input {...register("password")} type='password' placeholder='Enter password' required className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
               
                <input type="submit" value='sign in' className='bg-blue-500 px-4 py-1 rounded-2xl font-semibold' />
            </form>
            <p>if you are new then go to <NavLink className='font-semibold text-1xl text-blue-500 ' to='/signUp'>sign up</NavLink> page</p>

            
        </div>
    );
};

export default SignInCom;