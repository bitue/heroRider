import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const SignUpCom = () => {
    const { register, handleSubmit } = useForm();

    const history = useHistory()

    const [role, setRole] = useState('rider')

    //get the useFirebase hook 

    const {signUpEmailPass} = useContext(AuthContext)
   
    const onSubmit = data => {
        data.role= role 
        

        signUpEmailPass(data.email, data.password, history)
        console.log(data)
    }
   
    return (
        <div>
            <h1 className='font-semibold text-2xl text-center '>Sign Up here </h1>
            <div className='w-9/12 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                <input {...register("fullName")} type='text' placeholder='Full Name' required className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
                <input {...register("email")} type='email' placeholder='enter email' required  className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
                <input {...register("age")} type='number' placeholder='age' required  className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
                <input {...register("address")} type='text' placeholder='put your address' required className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
                <input {...register("phone")} type='number' placeholder='put your phone number' required className='w-1/2 block mx-auto px-2 py-1 rounded-2xl border-2 my-1' />
              
                <input {...register("area")} type='text' placeholder='enter the area ' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' />
                {/* <input {...register("nidPic")} type='number' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' /> */}
                {/* <input {...register("profilePic")} type='number' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' /> */}
                {
                    role === 'rider' ? ( <>
                      {/* <input {...register("drivingLicensePic")} type='number' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' /> */}
                     <input {...register("carName")} type='text' placeholder='car name' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' />
                    <input {...register("carModel")} type='text' placeholder='car model' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' />
                    <input {...register("carNamePlate")} type='number' placeholder='car number plate info' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' /> </> ) : null
                }
              
                <input {...register("password")} type='password'  placeholder='enter your password' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' />
                <input {...register("confirmPassword")} type='password' placeholder='confirm password' required className='w-1/2 px-2 block mx-auto py-1 rounded-2xl border-2 my-1' />
                    <select {...register("vehicleType")}>
                    <option value="car">car</option>
                    <option value="bike">bike</option>
                  
                    </select>
                <input className='bg-blue-500 px-4 py-1 rounded-2xl font-semibold mx-5' type="submit" />
                </form>
            </div>

            <div className='my-3 space-x-3'>
                <button className={role==='rider' ? 'bg-blue-500 px-4 py-1 rounded-2xl font-semibold ' : ' px-4 py-1 rounded-2xl font-semibold '} onClick={()=> setRole('rider')} >Join As Rider</button> 
                <button className={role==='learner' ? 'bg-blue-500 px-4 py-1 rounded-2xl font-semibold ' : ' px-4 py-1 rounded-2xl font-semibold '} onClick={()=> setRole('learner')}>Join As Driving learner</button>
            </div>
            <p>if you are already registered then go to <NavLink className='font-semibold text-1xl text-blue-500 ' to='/signIn'>sign in</NavLink> page</p>
        </div>
    );
};

export default SignUpCom;