import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAuth from '../../hooks/useAuth';



const SignUpCom = () => {
    const { register, handleSubmit } = useForm();

    const history = useHistory()

    const [role, setRole] = useState('rider');
   

    //get the useFirebase hook 

    const {signUpEmailPass} = useAuth()
   
    const onSubmit = data => {
        if(data.password !==data.confirmPassword){
            return alert('password and confirm password must be same')
        }
        data.role= role ;
      
        const fileData = {
            email:data.email,
            nidPic:data.nidPic[0],
            profilePic:data.profilePic[0]
            
          
        };


        //this function upload the multimedia of the user
        fileDataUpload(fileData)


        
        data.nidPic='';
        data.profilePic='';
        data.drivingLicensePic=''

      
        console.log(fileData,'nid')
        
        

        signUpEmailPass(data.email, data.password, history, data)
        console.log(data)
    }

    const fileDataUpload =(fileUpData) => {


        const formData =new FormData();
        formData.append('email', fileUpData.email)
        formData.append('nid', fileUpData.nidPic)
        formData.append('pro', fileUpData.profilePic)
        // formData.append('driving', fileUpData.drivingPic)
        fetch('https://mighty-wildwood-88666.herokuapp.com/fileUpload', {
            method:'POST',
            body:formData
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data,'file upload')
        })
       
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
                <p>NID Pic</p>
                <input {...register("nidPic")} type='file' accept='image/*' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' />
                <p>Profile pic</p>
                <input {...register("profilePic")} type='file' accept='image/*' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' />
                {
                    role === 'rider' ? ( <>
                    {/* <p>Driving license pic</p>
                      <input {...register("drivingLicensePic")} type='file' accept='image/*' placeholder='' required className='w-1/2 px-2 py-1 rounded-2xl border-2 my-1' /> */}
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